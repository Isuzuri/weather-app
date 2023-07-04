import { Injectable } from "@angular/core";
import { FiveDayForecastInterface } from "../entities/interfaces";

@Injectable()
export class FiveDayService {
    private fiveDayWeather: any = [];
    private fiveDayDaily: FiveDayForecastInterface.Day[] = [];
    private fiveDayHourly: FiveDayForecastInterface.Hourly[] = [];

    private API_KEY = "a8d6480edb4735dd39b1b37f0993ebc2";

    getWeather() {
        return this.fiveDayDaily
    }

    async setWeather(city: string = 'London'){
        const geoPosition = await this.getGeopos(city);
        let fiveDayWeather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${geoPosition.lat}&lon=${geoPosition.lon}&appid=${this.API_KEY}`).then(res => res.json());
        fiveDayWeather = fiveDayWeather.list.map((day: any) => {
            return day = {
                weekDay: this.getWeekDay(new Date(day.dt * 1000)),
                date: this.getDate(new Date(day.dt * 1000)),
                icon: day.weather[0].icon,
                temp: Math.floor(day.main.temp - 273.15),
                description:  day.weather[0].description,
                time: this.getRightTime(new Date(day.dt * 1000)),
                howFeel: Math.floor(day.main.feels_like - 273.15),
                windDirectiondAndSpeed: day.wind.deg
            }
        })

        let fiveDayDaily = this.getHighestDayTemp(await fiveDayWeather);

        fiveDayDaily = fiveDayDaily.map((day: any) => {
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

    setHourlyWeather(weekDay: string){
        let currentDay = this.fiveDayWeather.filter((e: { weekDay: string; }) => e.weekDay.toLocaleUpperCase() == weekDay);
        currentDay = currentDay.slice(0, 6)
        const time = currentDay.map((e: { time: any; }) => e.time);
        const icon = currentDay.map((e: { icon: any; }) => `<img src="https://openweathermap.org/img/wn/${e.icon}.png">`,);
        const description = currentDay.map((e: { description: any; }) => e.description);
        const temp = currentDay.map((e: { temp: any; }) => e.temp);
        const howFeel = currentDay.map((e: { howFeel: any; }) => e.howFeel);
        const windDirectiondAndSpeed = currentDay.map((e: { windDirectiondAndSpeed: any; }) => e.windDirectiondAndSpeed);
        let fiveDayHourly = [time, icon, description, temp, howFeel, windDirectiondAndSpeed];
        return fiveDayHourly;
    }

    private async getGeopos(city: string) {
        const geoPosition = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a8d6480edb4735dd39b1b37f0993ebc2`).then(res => res.json());
        return {lat: geoPosition[0].lat, lon: geoPosition[0].lon};
    }

    private getWeekDay(date: Date){
        let weekDay = date.getDay();
        const weekDayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return weekDayList[weekDay];
    }

    private getDate(date: Date){
        let month = date.getMonth();
        let day = date.getDate();
        const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${monthList[month]} ${day}`;
    }

    private getRightTime(time: Date) {
        const hours = time.getHours() 
        const minutes = time.getMinutes()
        if (minutes < 10) {
            return `${hours}:0${minutes}`
        } else return `${hours}:${minutes}`
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
        changeableArray.forEach((e: any) => {
            if (weekDayList.includes(e.weekDay)) {
                returnedArray.push(e);
                weekDayList.splice(weekDayList.indexOf(e.weekDay), 1);
            }
        });     
        return returnedArray
    }
}