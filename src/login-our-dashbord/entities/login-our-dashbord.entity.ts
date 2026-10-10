export enum AccountType {
  OWNER = 'owner',
  SALES = 'sales',
}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false }) 
  password: string;

  @Column({ type: 'enum', enum: AccountType })
  accountType: AccountType;

  @CreateDateColumn()
  createdAt: Date;
}