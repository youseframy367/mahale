

import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ClientCategory } from '../enums/client-category.enum';
import { ClientDetails } from './client-details.entity';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  shopName: string;

  @Column()
  location: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: ClientCategory })
  category: ClientCategory;

  @Column({ unique: true })
  accessCode: string;

  @OneToOne(() => ClientDetails, (details) => details.client)
  details: ClientDetails;

  @CreateDateColumn()
  createdAt: Date;
}