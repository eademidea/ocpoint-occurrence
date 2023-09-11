import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';

@Module({
    controllers: [],
    providers: [OccurrenceService],
    imports: []
})
export class OccurrenceModule {}
