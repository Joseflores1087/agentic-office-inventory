import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
import { Transaction } from './entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Transaction])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
