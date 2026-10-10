import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client } from './entities/clients.entity';
import { ClientDetails } from './entities/clients-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, ClientDetails])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}