export namespace CommonInterface {
    export interface OneDay {
        weekDay: string;
        date: Date;
        icon: string;
        temp: number;
        description: string;
    }

    export interface Hourly {
        time: Date;
        icon: string;
        description: string;
        temp: number;
        howFeel: number;
        windDirectiondAndSpeed: number;
    }
}