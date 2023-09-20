import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { db_config } from './environments/environments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: db_config.host,
      port: db_config.port,
      username: db_config.username,
      password: db_config.password,
      database: db_config.database,
      entities: [User],
      synchronize: true,
      logging: true,
  }),
    ConfigModule,
    UserModule,
    AuthModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
