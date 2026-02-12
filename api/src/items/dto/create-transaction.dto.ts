import { IsEnum, IsInt, Min } from 'class-validator';
import { TransactionType } from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsEnum(TransactionType, {
    message: 'tipo must be either ENTRADA or SALIDA',
  })
  tipo: TransactionType;

  @IsInt({ message: 'cantidad must be an integer' })
  @Min(1, { message: 'cantidad must be at least 1' })
  cantidad: number;
}
