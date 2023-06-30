import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { TodayInterface } from "../entities/interfaces";

@Injectable()
export class TodayService{
    constructor(private logService: LogService) {}

    private currentWeather: TodayInterface.CurrentWeather = {
        date: new Date(),
        icon: "",
        desc: "",
        temp: 0,
        feelsLike: 0,
        sunrise: new Date(),
        sunset: new Date(),
        lengthOfDay: '0'
    }

    private hourly: TodayInterface.Hourly[] = [];
    private nearly: TodayInterface.Nearly[] = [];

    getCurrentWeather(): TodayInterface.CurrentWeather {
        return this.currentWeather;
    }

    getHourlyWeather(): TodayInterface.Hourly[] {
        return this.hourly;
    }

    getNearlyWeather(): TodayInterface.Nearly[] {
        return this.nearly;
    }

    async setCurrentWeather(city: string = 'London') {
        const geoPosition = await this.getTodayWeather(city);
        const currentDayWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=a8d6480edb4735dd39b1b37f0993ebc2`).then(res => res.json());
        const currentWeather: TodayInterface.CurrentWeather = {
            date: new Date(currentDayWeather.dt * 1000),
            icon: currentDayWeather.weather[0].icon,
            desc: currentDayWeather.weather[0].description,
            temp: (currentDayWeather.main.temp - 273.15),
            feelsLike: (currentDayWeather.main.feels_like - 273.15),
            sunrise: new Date(currentDayWeather.sys.sunrise * 1000),
            sunset: new Date(currentDayWeather.sys.sunset * 1000),
            lengthOfDay: this.getLengthOfDay(currentDayWeather.sys.sunset, currentDayWeather.sys.sunrise)
        }
        this.currentWeather = currentWeather;
    }

    setHourlyWeather(hourly: TodayInterface.Hourly[]){
        this.hourly = hourly;
    }

    setNearlyWeather(nearly: TodayInterface.Nearly[]){
        this.nearly = nearly;
    }

    private async getTodayWeather(city: string) {
        const geoPosition = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a8d6480edb4735dd39b1b37f0993ebc2`).then(res => res.json());
        return {lat: geoPosition[0].lat, lon: geoPosition[0].lon};
    }

    private getLengthOfDay(sunset: number, sunrise: number) {
        const lengthOfDay = sunset - sunrise;
        const hours = Math.floor(lengthOfDay / 3600);
        const minutes = Math.floor((lengthOfDay % 3600) / 60);
        return `${hours}h ${minutes}m`;
      }
}