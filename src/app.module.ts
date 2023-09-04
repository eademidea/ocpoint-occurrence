import { Module } from '@nestjs/common';
import { OccurrenceController } from './controllers/occurrence.controller';
import { OccurrenceService } from './services/occurrence/occurrence.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres'
      , host: '172.20.0.2'
      , port: '5432'
      , username: 'postgres'
      , password: 'teste'
    })
  ],
  controllers: [OccurrenceController],
  providers: [OccurrenceService],
})
export class AppModule { }
