import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './controller/customer.controller';
import { AuthMiddleware } from './middleware/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './model/customer.entity';
import { CustomerService } from './service/customer.service';
import { Product } from './model/product.entity';
import { modelConfigs } from './config/model.config';
import { controllerConfigs } from './config/controller.config';
import { serviceConfigs } from './config/service.config';
import { dbConfigs } from './config/database.config';

@Module({
  imports: [...dbConfigs],
  controllers: [AppController, ...controllerConfigs],
  providers: [AuthMiddleware, AppService, ...serviceConfigs],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('customers'); // Terapkan middleware untuk route '/customer'
  }
}
