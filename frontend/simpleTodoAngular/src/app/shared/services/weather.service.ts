import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Weather } from '../interfaces/weather'
import { environment } from '../../../environments/environment'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // αυτή η μεταβλιτή κληρονομοί όλλες τις ιδιώτητες του service HttpClient. Με το inject γιατί έχει @Injectable εδώ λίγο παραπάνω
  http: HttpClient = inject(HttpClient)

    getWeather(city: string = 'Athens', country: string = 'Greece') {
    return this.http.get<Weather>(
      `${baseUrl}?q=${city},${country}&appid=${environment.weatherApiKey}`, {
        headers:{
          Accept: "application/json"
        }
      }
    )
    // .pipe(
    //   tap(response => console.log('API Response:', response)) // Log the full response
    // )
  }
}
