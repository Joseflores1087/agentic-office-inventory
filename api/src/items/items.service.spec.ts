import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ItemsService } from './items.service';
import { Item, ItemCategoria } from './entities/item.entity';
import { Transaction, TransactionType } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { InsufficientStockException } from './exceptions/insufficient-stock.exception';

describe('ItemsService', () => {
  let service: ItemsService;
  let mockRepository: any;
  let mockDataSource: any;

  beforeEach(async () => {
    mockRepository = {
      count: jest.fn(),
      save: jest.fn(),
      find: jest.fn().mockResolvedValue([]),
      findOne: jest.fn(),
    };

    mockDataSource = {
      transaction: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useValue: mockRepository,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTransaction', () => {
    const mockItem: Item = {
      id: 1,
      nombre: 'Test Item',
      descripcion: 'Test Description',
      categoria: ItemCategoria.HARDWARE,
      stock_actual: 10,
      precio_unitario: 100,
      stock_critico: 2,
      created_at: new Date(),
      updated_at: new Date(),
    };

    it('should throw InsufficientStockException when SALIDA quantity exceeds stock', async () => {
      const dto: CreateTransactionDto = {
        tipo: TransactionType.SALIDA,
        cantidad: 15,
      };

      mockRepository.findOne.mockResolvedValue(mockItem);

      await expect(service.createTransaction(1, dto)).rejects.toThrow(
        InsufficientStockException,
      );
    });

    it('should throw NotFoundException when item does not exist', async () => {
      const dto: CreateTransactionDto = {
        tipo: TransactionType.ENTRADA,
        cantidad: 5,
      };

      mockRepository.findOne.mockResolvedValue(null);

      await expect(service.createTransaction(999, dto)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should successfully create SALIDA transaction and update stock', async () => {
      const dto: CreateTransactionDto = {
        tipo: TransactionType.SALIDA,
        cantidad: 5,
      };

      const mockTransaction: Transaction = {
        id: 1,
        item_id: 1,
        item: mockItem,
        tipo: TransactionType.SALIDA,
        cantidad: 5,
        stock_anterior: 10,
        stock_nuevo: 5,
        realizado_por: 'Sistema',
        created_at: new Date(),
      };

      mockRepository.findOne.mockResolvedValue(mockItem);

      const mockManager = {
        save: jest.fn().mockResolvedValue(mockTransaction),
        create: jest.fn().mockReturnValue(mockTransaction),
      };

      mockDataSource.transaction.mockImplementation(async (callback) => {
        return callback(mockManager);
      });

      const result = await service.createTransaction(1, dto);

      expect(result).toEqual(mockTransaction);
      expect(mockDataSource.transaction).toHaveBeenCalled();
      expect(mockManager.save).toHaveBeenCalledTimes(2);
    });

    it('should successfully create ENTRADA transaction and increase stock', async () => {
      const dto: CreateTransactionDto = {
        tipo: TransactionType.ENTRADA,
        cantidad: 5,
      };

      const mockTransaction: Transaction = {
        id: 2,
        item_id: 1,
        item: mockItem,
        tipo: TransactionType.ENTRADA,
        cantidad: 5,
        stock_anterior: 10,
        stock_nuevo: 15,
        realizado_por: 'Sistema',
        created_at: new Date(),
      };

      mockRepository.findOne.mockResolvedValue(mockItem);

      const mockManager = {
        save: jest.fn().mockResolvedValue(mockTransaction),
        create: jest.fn().mockReturnValue(mockTransaction),
      };

      mockDataSource.transaction.mockImplementation(async (callback) => {
        return callback(mockManager);
      });

      const result = await service.createTransaction(1, dto);

      expect(result).toEqual(mockTransaction);
      expect(mockDataSource.transaction).toHaveBeenCalled();
      expect(mockManager.save).toHaveBeenCalledTimes(2);
    });
  });
});
