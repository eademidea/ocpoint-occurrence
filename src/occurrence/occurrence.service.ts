import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Occurrence } from './ocurrence.entity';
import { Connection } from 'typeorm';

@Injectable()
export class OccurrenceService {

    constructor(
        @InjectModel(Occurrence) private ocurrenceRepository: typeof Occurrence,
        @InjectConnection() private readonly connection: Connection
    ) { }

    async getAllOcurrences() {
        return await this.ocurrenceRepository.findAll();
    }

    async getOccurrenceByUser(collaboratorId: number) {
        // return await this.connection.query(`SELECT * FROM tb_occurrence where "collaboratorId" = ${collaboratorId};`);
        return await this.ocurrenceRepository.findAll({where: {collaboratorId}, include: {all: true}});
    }

    async generateOccurrence(ocurrence: Occurrence) {
        await this.ocurrenceRepository.create(ocurrence);
    }

}
