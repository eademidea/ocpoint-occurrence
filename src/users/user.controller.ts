import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';

@ApiTags("User")
@Controller('user')
export class UserController {

    constructor(private userService: UsersService) { }


    @ApiResponse({ status: 200, description: 'Request OK.' })
    @ApiResponse({ status: 500, description: 'Internal Server Error.' })
    @Get('/:id')
    getUserById(@Param('id') id: number) {
        return this.userService.findById(id);
    }

}
