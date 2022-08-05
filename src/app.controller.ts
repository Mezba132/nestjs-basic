import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import { ReportDto, UpdateReportDto, ReportResponseDto } from './dtos/report.dto';

@Controller()
export class AppController {}
