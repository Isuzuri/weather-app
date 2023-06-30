export namespace FiveDayForecastInterface {
    export interface Day {
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

export namespace TodayInterface {
    export interface CurrentWeather {
        date: Date;
        icon: string;
        desc: string;
        temp: number;
        feelsLike: number;
        sunrise: Date;
        sunset: Date;
        lengthOfDay: string;
    }

    export interface Hourly {
        time: Date;
        icon: string;
        description: string;
        temp: number;
        howFeel: number;
        windDirectiondAndSpeed: number;
    }

    export interface Nearly {
        title: string;
        icon: string;
        temp: number;
    }
}