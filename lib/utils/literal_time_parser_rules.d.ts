export declare const literalTimeParserRules: ({
    match: RegExp;
    provide: () => number;
} | {
    match: RegExp[];
    provide: (match: {
        num: any;
        unit: any;
    }) => Date;
} | {
    match: RegExp;
    provide: (match: {
        num: any;
        unit: any;
    }) => Date;
})[];
