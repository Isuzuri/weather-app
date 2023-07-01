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
    private API_KEY = "a8d6480edb4735dd39b1b37f0993ebc2";

    getCurrentWeather(): TodayInterface.CurrentWeather {
        return this.currentWeather;
    }

    getHourlyWeather(): TodayInterface.Hourly[] {
        return this.hourly;
    }

    getNearbyWeather(): TodayInterface.Nearly[] {
        return this.nearly;
    }

    async setCurrentWeather(city: string = 'London') {
        const geoPosition = await this.getTodayWeather(city);
        const currentDayWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`).then(res => res.json());
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

    async setHourlyWeather(city: string = 'London'){
        const geoPosition = await this.getTodayWeather(city);
        let hourlyWeather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`).then(res => res.json());
        hourlyWeather = hourlyWeather.list.slice(0, 6).map((day: any) => {
            return day = {
                time: new Date(day.dt * 1000),
                icon: `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">`,
                description: day.weather[0].description,
                temp: Math.floor(day.main.temp - 273.15),
                howFeel: Math.floor(day.main.feels_like - 273.15),
                windDirectiondAndSpeed: day.wind.deg
            }
        });
        const time = hourlyWeather.map((e: any) => e.time);
        const icon = hourlyWeather.map((e: any) => e.icon);
        const description = hourlyWeather.map((e: any) => e.description);
        const temp = hourlyWeather.map((e: any) => e.temp);
        const howFeel = hourlyWeather.map((e: any) => e.howFeel);
        const windDirectiondAndSpeed = hourlyWeather.map((e:any) => e.windDirectiondAndSpeed);
        hourlyWeather = [time, icon, description, temp, howFeel, windDirectiondAndSpeed];
        this.hourly = hourlyWeather
    }

    async setNearbyWeather(city: string = 'London'){
        const geoPosition = await this.getTodayWeather(city);
        // Где брать соседние города?
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