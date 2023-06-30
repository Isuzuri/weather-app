import { Injectable } from "@angular/core";
import { FiveDayForecastInterface } from "../entities/interfaces";

@Injectable()
export class FiveDayService {
    private oneDayWeather: FiveDayForecastInterface.Day[] = [];
    private hourlyWeather: FiveDayForecastInterface.Hourly[] = [];

    getOneDayWeather(): FiveDayForecastInterface.Day[] {
        return this.oneDayWeather;
    }

    getHourlyWeather(): FiveDayForecastInterface.Hourly[] {
        return this.hourlyWeather;
    }

    setOneDayWeather(oneDayWeather: FiveDayForecastInterface.Day[]){
        this.oneDayWeather = oneDayWeather;
    }

    setHourlyWeather(hourlyWeather: FiveDayForecastInterface.Hourly[]){
        this.hourlyWeather = hourlyWeather;
    }
}