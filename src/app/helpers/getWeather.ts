export function getWeather(city: string): void  {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a8d6480edb4735dd39b1b37f0993ebc2`)
        .then(response => response.json())
        .then(data => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=a8d6480edb4735dd39b1b37f0993ebc2`)
                .then(response => response.json())
                .then(data => {
                    return (data);
            })
        })
}   