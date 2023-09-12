import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from 'src/group/group.entity';
import { Person } from 'src/persons/person.entity';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { User } from './user.entity';

@Module({
    controllers: [UserController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User,Group, Person]),
    ],
    exports: [
        UsersService
    ]
})
export class UserModule { }
