import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { TodayInterface } from "../entities/interfaces";
import { HelpersComponent } from "../shared/helpers/helpers.component";
import { Router } from '@angular/router';

@Injectable()
export class TodayService{
    constructor(private logService: LogService, private router: Router) {}

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
    private API_KEY = "a8d6480edb4735dd39b1b37f0993ebc2";

    getCurrentWeather(): TodayInterface.CurrentWeather {
        return this.currentWeather;
    }

    getHourlyWeather(): TodayInterface.Hourly[] {
        return this.hourly;
    }

    async setCurrentWeather(city: string) {
        try {
          const geoPosition = await HelpersComponent.getGeopos(city);
          const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`);
      
          if (response.ok) {
            const currentDayWeather = await response.json();
      
            const currentWeather: TodayInterface.CurrentWeather = {
              date: new Date(currentDayWeather.dt * 1000),
              icon: currentDayWeather.weather[0].icon,
              desc: currentDayWeather.weather[0].main,
              temp: (currentDayWeather.main.temp - 273.15),
              feelsLike: (currentDayWeather.main.feels_like - 273.15),
              sunrise: new Date(currentDayWeather.sys.sunrise * 1000),
              sunset: new Date(currentDayWeather.sys.sunset * 1000),
              lengthOfDay: HelpersComponent.getLengthOfDay(currentDayWeather.sys.sunset, currentDayWeather.sys.sunrise)
            };
      
            this.currentWeather = currentWeather;
            this.router.navigateByUrl('today');
          } 
        } catch (error) {
            this.router.navigateByUrl('error');
        }
      }

    async setHourlyWeather(city: string) {
        try {
            const geoPosition = await HelpersComponent.getGeopos(city);
            let hourlyWeather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`).then(res => res.json());
            hourlyWeather = hourlyWeather.list.slice(0, 6).map((day: any) => {
                return day = {
                    time: HelpersComponent.getRightTime(new Date(day.dt * 1000)),
                    icon: day.weather[0].icon,
                    description: day.weather[0].main,
                    temp: Math.floor(day.main.temp - 273.15),
                    howFeel: Math.floor(day.main.feels_like - 273.15),
                    windDirectiondAndSpeed: `${HelpersComponent.getWorldSide(day.wind.deg)}-${Math.floor(day.wind.speed * 3.6)}`
                }
            });
            const time = hourlyWeather.map((e: { time: string; }) => e.time);
            const icon = hourlyWeather.map((e: { icon: string; }) => ({value: e.icon, isImage: true}));
            const description = hourlyWeather.map((e: { description: string; }) => e.description);
            const temp = hourlyWeather.map((e: { temp: number; }) => e.temp);
            const howFeel = hourlyWeather.map((e: { howFeel: number; }) => e.howFeel);
            const windDirectiondAndSpeed = hourlyWeather.map((e: { windDirectiondAndSpeed: string; }) => e.windDirectiondAndSpeed);
            hourlyWeather = [time, icon, description, temp, howFeel, windDirectiondAndSpeed];
            this.hourly = hourlyWeather;
        } catch (error) {
            
        }
    }
    
    async getCity(lat: number, lon: number) {
        const city = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`).then(res => res.json());
        return await city.name;
    }
}