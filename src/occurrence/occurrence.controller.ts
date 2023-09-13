import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";

import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Response } from 'express';
import { OccurrenceService } from "./occurrence.service";
import { Occurrence } from "./ocurrence.entity";

@Controller("/occurrence")
@ApiTags("Occurrence")
export class OccurrenceController {

    constructor(private readonly service: OccurrenceService) { }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get("/all")
    getAllOccurrence() {
        return this.service.getAllOcurrences();
    }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get("/by-user/:id")
    @HttpCode(200)
    getOccurrenceByUser(@Param('id') id: number) {
        return this.service.getOccurrenceByUser(id);
    }

    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get('/aproved/by-user/:id')
    getOccurrenceApprovedByUser(@Param('id') id: number) {
        return true;
    }

    @ApiResponse({ status: 201, description: 'Created.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Post('/new')
    generateOccurrence(@Body() occurrence: Occurrence) {
        return this.service.generateOccurrence(occurrence);
    }

    @ApiResponse({ status: 201, description: 'Updated.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Put("/aprove/:id")
    aproveOccurrence(@Param('id') id: number) {
        return this.service.aproveOccurrence(id);
    }


}