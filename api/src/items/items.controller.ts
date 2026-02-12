import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post(':id/transaction')
  async createTransaction(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.itemsService.createTransaction(id, dto);
  }
}
