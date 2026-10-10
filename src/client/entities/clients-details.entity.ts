import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './clients.entity';

@Entity('client_details')
export class ClientDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  customerPhone: string | null;

  @Column({ default: false })
  hasDelivery: boolean;

  @Column({ type: 'varchar', nullable: true })
  imageUrl: string | null;

  @OneToOne(() => Client, (client) => client.details, { onDelete: 'CASCADE' })
  @JoinColumn()
  client: Client;
}