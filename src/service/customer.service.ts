import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../model/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async getAll(): Promise<Customer[]> {
    // select * from customer
    return this.customerRepository.find();
    
  }

  async create(data: Partial<Customer>): Promise<Customer> {
    //insert into customer
    const customer = this.customerRepository.create(data);
    return this.customerRepository.save(customer);
  }

  async update(
    id: number,
    data: Partial<Customer>,
  ): Promise<Customer | undefined> {
    //update customer set
    await this.customerRepository.update(id, data);
    return this.customerRepository.findOneBy({
      id: id,
    });
  }

  async delete(id: number): Promise<void> {
    //delete from customer
    await this.customerRepository.delete(id);
  }
}
