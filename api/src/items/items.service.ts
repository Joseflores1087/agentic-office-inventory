import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item, ItemCategoria } from './entities/item.entity';

@Injectable()
export class ItemsService implements OnModuleInit {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async onModuleInit() {
    await this.seedDataIfEmpty();
  }

  private async seedDataIfEmpty() {
    try {
      const count = await this.itemRepository.count();
      if (count === 0) {
        const mockItems = [
          {
            nombre: 'Laptop Dell Latitude 5420',
            descripcion: 'Laptop corporativa Intel i5, 16GB RAM, 512GB SSD',
            categoria: ItemCategoria.HARDWARE,
            stock_actual: 5,
            precio_unitario: 850.0,
            stock_critico: 2,
          },
          {
            nombre: 'Mouse Logitech MX Master 3',
            descripcion: 'Mouse inalámbrico ergonómico para productividad',
            categoria: ItemCategoria.PERIFERICOS,
            stock_actual: 15,
            precio_unitario: 99.99,
            stock_critico: 5,
          },
          {
            nombre: 'Resma de Papel A4',
            descripcion: 'Resma de 500 hojas blancas tamaño carta',
            categoria: ItemCategoria.PAPELERIA,
            stock_actual: 30,
            precio_unitario: 5.5,
            stock_critico: 10,
          },
          {
            nombre: 'Monitor LG UltraWide 29"',
            descripcion: 'Monitor panorámico 29 pulgadas 2560x1080',
            categoria: ItemCategoria.HARDWARE,
            stock_actual: 8,
            precio_unitario: 350.0,
            stock_critico: 3,
          },
          {
            nombre: 'Teclado Mecánico Keychron K2',
            descripcion: 'Teclado mecánico inalámbrico 75% switches brown',
            categoria: ItemCategoria.PERIFERICOS,
            stock_actual: 12,
            precio_unitario: 89.0,
            stock_critico: 4,
          },
          {
            nombre: 'Cuaderno Profesional',
            descripcion: 'Cuaderno de 100 hojas rayadas con espiral',
            categoria: ItemCategoria.PAPELERIA,
            stock_actual: 25,
            precio_unitario: 3.5,
            stock_critico: 8,
          },
        ];

        await this.itemRepository.save(mockItems);
        console.log('✅ Database seeded with 6 mock items');
      }
    } catch (error) {
      console.log('⚠️  Database seeding skipped (DB not available):', error.message);
    }
  }

  async findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }
}
