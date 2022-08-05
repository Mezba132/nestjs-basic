import { Injectable } from '@nestjs/common'
import { data, ReportType } from '../data';
import { ReportResponseDto } from '../dtos/report.dto';

@Injectable()
export class ReportService {
    getAllReport(type : ReportType) : ReportResponseDto[] {
        return data.report
            .filter(report => report.type === type)
            .map(res => new ReportResponseDto(res))
      }
    
      getReportById(type : ReportType, id : string) : ReportResponseDto {
        const result = data.report.filter(report => report.type === type).find(report => report.id === id);
        return new ReportResponseDto(result); // return partial data
      }
    
      createReport(type : ReportType, body : any) : ReportResponseDto {
        const reportData : any = {
            id : body.id,
            source : body.source,
            amount : body.amount,
            created_at : new Date(),
            updated_at : new Date(),
            type : type
        }
          data.report.push(reportData);
          return new ReportResponseDto(reportData);
      }
    
      updateReport(type : ReportType, body : any, id : string) : ReportResponseDto {
        const reportById = data.report.filter(report => report.type === type).find(report => report.id === id);
        if(!reportById) return;
    
        let reportIndex = data.report.findIndex(report => report.id === reportById.id);
        
        data.report[reportIndex] = {
          ...data.report[reportIndex],
          ...body
        }
    
        return new ReportResponseDto(data.report[reportIndex]);
      }
    
      deleteReport(type : ReportType, id : string) {
        const reportById = data.report.filter(report => report.type === type).find(report => report.id === id);
        
        if(!reportById) return;
    
        let reportIndex = data.report.findIndex(report => report.id === reportById.id);
        if(reportIndex == -1) return;
    
        data.report.splice(reportIndex, 1);
    
        return;
      }
}
