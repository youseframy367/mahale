import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './login-our-dashbord/login-our-dashbord.module';
import { User } from './login-our-dashbord/entities/login-our-dashbord.entity';
import { ClientModule } from './clients/clients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'mahale',
      entities: [User],
      synchronize: true,
    }),

    AuthModule,

    ClientModule,
  ],
})
export class AppModule {}