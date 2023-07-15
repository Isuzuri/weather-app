import { Injectable } from "@angular/core";
import { FiveDayForecastInterface } from "../entities/interfaces";
import { HelpersComponent } from "../shared/helpers/helpers.component"

@Injectable()
export class FiveDayService {
    private fiveDayWeather: any = [];
    private fiveDayDaily: FiveDayForecastInterface.Day[] = [];

    private API_KEY = "a8d6480edb4735dd39b1b37f0993ebc2";

    getWeather() {
        return this.fiveDayDaily
    }

    async setWeather(city: string){
        const geoPosition = await HelpersComponent.getGeopos(city);
        let fiveDayWeather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`).then(res => res.json());
       
        fiveDayWeather = fiveDayWeather.list.map((day: any) => {
            return day = {
                weekDay: HelpersComponent.getWeekDay(new Date(day.dt * 1000)),
                date: HelpersComponent.getDate(new Date(day.dt * 1000)),
                icon: day.weather[0].icon,
                temp: Math.floor(day.main.temp - 273.15),
                description:  day.weather[0].main,
                time: HelpersComponent.getRightTime(new Date(day.dt * 1000)),
                howFeel: Math.floor(day.main.feels_like - 273.15),
                windDirectiondAndSpeed: `${HelpersComponent.getWorldSide(day.wind.deg)}-${Math.floor(day.wind.speed * 3.6)}`
            }
        })

        let fiveDayDaily = this.getHighestDayTemp(await fiveDayWeather);

        fiveDayDaily = fiveDayDaily.slice(0, 5).map((day: any) => {
            return day = {
                weekDay: day.weekDay,
                date: day.date,
                icon: day.icon,
                temp: day.temp,
                description: day.description,
            }
        })
        
        this.fiveDayDaily = fiveDayDaily;
        this.fiveDayWeather = fiveDayWeather;
    }

    getHourlyWeather(weekDay: string){
        let currentDay = this.fiveDayWeather.filter((e: { weekDay: string; }) => e.weekDay.toLocaleUpperCase() == weekDay);
        currentDay = currentDay.slice(0, 6)
        const time = currentDay.map((e: { time: string; }) => e.time);
        const icon = currentDay.map((e: { icon: string; }) => ({value: e.icon, isImage: true}));
        const description = currentDay.map((e: { description: string; }) => e.description);
        const temp = currentDay.map((e: { temp: number; }) => e.temp);
        const howFeel = currentDay.map((e: { howFeel: number; }) => e.howFeel);
        const windDirectiondAndSpeed = currentDay.map((e: { windDirectiondAndSpeed: string; }) => e.windDirectiondAndSpeed);
        let fiveDayHourly = [time, icon, description, temp, howFeel, windDirectiondAndSpeed];
        return fiveDayHourly;
    }

    private getHighestDayTemp(array: any): FiveDayForecastInterface.Day[] {
        const changeableArray = array.concat()
        const returnedArray: FiveDayForecastInterface.Day[] = []
        changeableArray.sort((a: any, b: any) => (a.weekDay === b.weekDay) 
        ? a.temp > b.temp 
        ? -1 
        : 1 
        : 0);
        const weekDayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        changeableArray.forEach((e: FiveDayForecastInterface.Day) => {
            if (weekDayList.includes(e.weekDay)) {
                returnedArray.push(e);
                weekDayList.splice(weekDayList.indexOf(e.weekDay), 1);
            }
        });     
        return returnedArray
    }
}