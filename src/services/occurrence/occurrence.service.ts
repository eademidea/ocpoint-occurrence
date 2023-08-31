import { Injectable } from "@nestjs/common";

@Injectable()
export class OccurrenceService {
    registerGroup():string {
        return "Teste";
    }
}