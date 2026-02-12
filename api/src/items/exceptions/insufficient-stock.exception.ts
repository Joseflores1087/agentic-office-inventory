import { BadRequestException } from '@nestjs/common';

export class InsufficientStockException extends BadRequestException {
  constructor(
    itemName: string,
    currentStock: number,
    requestedQuantity: number,
  ) {
    super(
      `Insufficient stock for item "${itemName}". Current stock: ${currentStock}, Requested: ${requestedQuantity}`,
    );
  }
}
