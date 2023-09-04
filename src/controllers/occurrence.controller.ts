import { Controller, Get, HttpCode, HttpStatus, Param, Res } from "@nestjs/common";
import { OccurrenceService } from "../services/occurrence/occurrence.service";

import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'express';
import { ok } from "assert";

@Controller("/occurrence")
@ApiTags("Occurrence")
export class OccurrenceController {

    constructor(private readonly service: OccurrenceService) { }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get("/all")
    getAllOccurrence(): [] {
        return this.service.getAllOcurrences();
    }

    @Get("/by-user/:id")
    @HttpCode(200)
    getOccurrenceByUser(@Param('id') id: string) {
        return this.service.getOccurrenceById(parseInt(id));
    }

    @Get('/aproved/by-user/:id')
    getOccurrenceApprovedByUser(@Param('id') id: string, @Res() res: Response) {
        res.status(HttpStatus.OK).send(id);
    }


}