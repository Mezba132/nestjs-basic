import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode, ParseEnumPipe } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportType } from '../data';
import { ReportDto, UpdateReportDto, ReportResponseDto } from '../dtos/report.dto';

@Controller('report/:type')
export class ReportController {
    constructor(private readonly reportService: ReportService) {}

    @Get()
    getAllReport(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType) : ReportResponseDto[] {
      if( type == ReportType.INCOME || type == ReportType.EXPENSE) {
        return this.reportService.getAllReport(type);
      }
    }
  
    @Get(':id')
    getReportById(
        @Param('type', new ParseEnumPipe(ReportType)) type: ReportType, 
        @Param('id') id : string
      ) : ReportResponseDto {
        if( type == ReportType.INCOME || type == ReportType.EXPENSE) {
          return this.reportService.getReportById(type, id);
        }
    }
  
    @Post()
    createReport(
        @Param('type', new ParseEnumPipe(ReportType)) type: ReportType, 
        @Body() body : ReportDto
      ) : ReportResponseDto {
        return this.reportService.createReport(type, body);
    }
  
    @Put(':id')
    updateReport( 
        @Param('type', new ParseEnumPipe(ReportType)) type: ReportType, 
        @Body() body : UpdateReportDto, 
        @Param('id') id: string
      ) : ReportResponseDto {
        return this.reportService.updateReport(type, body, id);
    }
  
    @HttpCode(204)
    @Delete(':id')
    deleteReport(
      @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,  
      @Param('id') id: string
    ) {
      return this.reportService.deleteReport(type, id);
    }    
}
