export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = { report: 
    [
        {
            id : '1',
            source : 'Apsis',
            amount : 15000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME
        },
        {
            id : '2',
            source : 'Youtube',
            amount : 5000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENSE
        },
        {
            id : '3',
            source : 'Facebook',
            amount : 7000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.INCOME
        },
        {
            id : '4',
            source : 'Instagram',
            amount : 5000,
            created_at : new Date(),
            updated_at : new Date(),
            type : ReportType.EXPENSE
        }
    ] 
};

interface Data {
    report : {
        id : string;
        source : string;
        amount : number;
        created_at : Date;
        updated_at : Date;
        type : ReportType;
    }[]
}

