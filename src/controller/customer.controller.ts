import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { Customer } from 'src/model/customer.entity';
import { CustomerService } from 'src/service/customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getAll(): Promise<Customer[]> {
    return this.customerService.getAll();
  }

  @Post()
  create(@Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customerService.create(customerData);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() customerData: Partial<Customer>,
  ): Promise<Customer> {
    return this.customerService.update(id, customerData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.customerService.delete(id);
  }
}
