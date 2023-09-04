import { Test, TestingModule } from "@nestjs/testing";
import { OccurrenceService } from "../services/occurrence/occurrence.service";
import { OccurrenceController } from "./occurrence.controller";

describe('OccurrenceController', () => {
    let occurrenceController: OccurrenceController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [OccurrenceController],
            providers: [OccurrenceService],
        }).compile();

        occurrenceController = app.get<OccurrenceController>(OccurrenceController);
    })


    describe('Obter todas ocorrencias...', () => {
        it('Should get all occurences...', () => {
            expect(occurrenceController.getAllOccurrence().length == 0).toBe(true);
        });
    });

    describe('Obter todas ocorrencias...', () => {
        it('Should get all occurrences by user id...', () => {
            expect(occurrenceController.getOccurrenceByUser('2').length == 0).toBe(true);
        })
    });

});