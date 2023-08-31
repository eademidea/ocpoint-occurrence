import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { OccurrenceController } from './controllers/occurrence.controller';
import { AppService } from './services/app.service';
import { OccurrenceService } from './services/occurrence/occurrence.service';

@Module({
  imports: [],
  controllers: [AppController, OccurrenceController],
  providers: [AppService, OccurrenceService],
})
export class AppModule { }
