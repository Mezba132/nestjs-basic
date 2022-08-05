import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportController } from './report/report.controller';
import { ReportModule } from './report/report.module';
import { SummaryService } from './summary/summary.service';
import { SummaryController } from './summary/summary.controller';
import { SummaryModule } from './summary/summary.module';
import { ReportService } from './report/report.service';

@Module({
  imports: [
    ReportModule, 
    SummaryModule
  ],
  controllers: [
    AppController, 
    ReportController, 
    SummaryController
  ],
  providers: [
    AppService, 
    SummaryService, 
    // ReportService,
    {
      provide : APP_INTERCEPTOR,
      useClass : ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
