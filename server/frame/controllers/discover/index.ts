import { Controller, Get } from '@nestjs/common';
import { DiscoverService } from '@service';

@Controller('/discover')
export class DisCoverController {
    constructor(private readonly appService: DiscoverService) { }

    @Get('/movie')
    getMovie() {
        return this.appService.getMovie();
    }

}
