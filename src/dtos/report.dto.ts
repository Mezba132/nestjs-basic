import { IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';

export class ReportDto {
    @IsNotEmpty()
    @IsString()
    id : string;

    @IsNotEmpty()
    @IsString()
    source : string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount : number;
}

export class UpdateReportDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    source : string;

    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount : number;
}

export class ReportResponseDto {
    id : string;
    source : string;
    amount : number;

    @Expose({ name : 'createdAt' })
    transformCreatedAT() {
        return this.created_at;
    }

    @Exclude()
    created_at : Date;
    @Exclude()
    updated_at : Date;
    type : ReportType;

    constructor(partial : Partial<ReportResponseDto>) {
        Object.assign(this, partial);
    }
}