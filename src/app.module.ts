import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';
import { Group } from './group/group.entity';
import { GroupModule } from './group/group.module';
import { OccurrenceModule } from './occurrence/occurrence.module';
import { Occurrence } from './occurrence/ocurrence.entity';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';
import { UserController } from './user/user.controller';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Occurrence, Group],
      autoLoadModels: true
    }),
    UserModule,
    GroupModule,
    OccurrenceModule,
    PersonsModule
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule { }
