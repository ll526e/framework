import { Controller, Get, Query } from '@nestjs/common';
import { DiscoverService } from '@service';
@Controller('/discover')
export class DisCoverController {
    constructor(private readonly appService: DiscoverService) { }

    @Get('/movie')
    getMovie(@Query() query) {
        return this.appService.getMovie(query);
    }

}
