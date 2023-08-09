import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'HALLO BRO!';
    return this.appService.getHello();
  }

  @Get('products')
  getProducts(): string {
    return 'Products';
  }

  @Get('products/:id')
  getProductById(@Param('id') id: string): string {
    return `Product with ID ${id}`;
  }

  @Post('products')
  createProduct(@Body() body: { product_name: string; price: number }): string {
    const { product_name, price } = body;
    // Lakukan operasi untuk menyimpan produk ke database
    return `Created product: ${product_name} with price ${price}`;
  }

  @Put('products/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() body: { product_name: string; price: number },
  ): string {
    const { product_name, price } = body;
    // Lakukan operasi untuk memperbarui produk di database berdasarkan ID
    return `Updated product with ID ${id}: New name ${product_name}, New price ${price}`;
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string): string {
    // Lakukan operasi untuk menghapus produk dari database berdasarkan ID
    return `Deleted product with ID ${id}`;
  }
}
