import { Controller, Get, HttpCode, HttpStatus, Param, Res } from "@nestjs/common";

import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'express';
import { OccurrenceService } from "./occurrence.service";

@Controller("/occurrence")
@ApiTags("Occurrence")
export class OccurrenceController {

    constructor(private readonly service: OccurrenceService) { }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get("/all")
    getAllOccurrence(): [] {
        // return this.service.getAllOcurrences();
        return null;
    }

    @Get("/by-user/:id")
    @HttpCode(200)
    getOccurrenceByUser(@Param('id') id: string) {
        // return this.service.getOccurrenceById(parseInt(id));
        return null;
    }

    @Get('/aproved/by-user/:id')
    getOccurrenceApprovedByUser(@Param('id') id: string, @Res() res: Response) {
        res.status(HttpStatus.OK).send(id);
    }


}