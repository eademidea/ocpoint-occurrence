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
        return await this.ocurrenceRepository.findAll({where: {collaboratorId}, include: {all: true}});
    }

    async generateOccurrence(ocurrence: Occurrence) {
        await this.ocurrenceRepository.create(ocurrence);
    }

    async aproveOccurrence(id:number) {
        return this.connection.query(`update tb_occurrence set "status" = 'APROVADO' where id = ${id} `); // TODO: melhorar a forma que isto acontece criar um enum ou alguma outra estrutura.
    }

}
