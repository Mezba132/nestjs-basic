import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {

    constructor(private readonly summaryService : SummaryService){}

    @Get()
    getTotalSummary() {
        return this.summaryService.calculateSummary();
    }
}
