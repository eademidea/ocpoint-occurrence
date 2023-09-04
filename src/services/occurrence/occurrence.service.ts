import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class OccurrenceService {

    private readonly logger = new Logger(OccurrenceService.name);
    
    registerOccurence():string {
        return "Teste";
    }

    getAllOcurrences():[] {
        return [];
    }

    getOccurrenceById(id: number):[] {
        this.logger.log("Obtendo todas ocorrência pelo id informado..")
        return [];
    }

}