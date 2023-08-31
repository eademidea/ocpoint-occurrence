import { Test, TestingModule } from "@nestjs/testing";
import { OccurrenceController } from "./occurrence.controller";
import { OccurrenceService } from "src/services/occurrence/occurrence.service";

describe('OccurrenceController', () => {
    let occurrenceController: OccurrenceController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [OccurrenceController],
            providers: [OccurrenceService],
        }).compile();

        occurrenceController = app.get<OccurrenceController>(OccurrenceController);
    })

    describe('Cadastro de grupos de usuário', () => {
        it('Should register a new user group...', () => {
            expect(occurrenceController.getOccurrenceByUser('1',null)).toBe('1');
        })
    })
})