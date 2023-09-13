import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { OccurrenceController } from './occurrence.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Occurrence } from './ocurrence.entity';
import { User } from 'src/users/user.entity';

@Module({
    controllers: [OccurrenceController],
    providers: [OccurrenceService],
    imports: [
        SequelizeModule.forFeature([Occurrence, User])
    ],
    exports: [
        OccurrenceService
    ]
})
export class OccurrenceModule { }
