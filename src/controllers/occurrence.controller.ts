import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { OccurrenceService } from "src/services/occurrence/occurrence.service";

import { Response } from 'express';
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("/occurrence")
@ApiTags("Occurrence")
export class OccurrenceController {

    constructor(private readonly service: OccurrenceService) { }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get("/all")
    getAllOccurrence(): string {
        return this.service.registerGroup();
    }

    @Get("/by-user/:id")
    getOccurrenceByUser(@Param('id') id: string, @Res() res: Response) {
        res.status(HttpStatus.OK).send(id);
    }

    @Get('/aproved/by-user/:id')
    getOccurrenceApprovedByUser(@Param('id') id: string, @Res() res: Response) {
        res.status(HttpStatus.OK).send(id);
    }


}