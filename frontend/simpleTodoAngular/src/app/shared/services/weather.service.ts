import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WeatherResponse  } from '../interfaces/weather'
import { environment } from '../../../environments/environment'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

// Πού χρησιμοποιείται; - Στο component σου ως:
// weatherService = inject(WeatherService);
@Injectable({ //Το @Injectable δηλώνει ότι αυτή η κλάση μπορεί να χρησιμοποιηθεί ως service από άλλα μέρη της εφαρμογής.
  providedIn: 'root' //Λέει στην Angular: "Κάνε διαθέσιμο αυτό το service σε ολόκληρη την εφαρμογή".
})
export class WeatherService {

  // αυτή η μεταβλιτή κληρονομοί όλλες τις ιδιώτητες του service HttpClient. Με το inject γιατί έχει @Injectable εδώ λίγο παραπάνω
  http: HttpClient = inject(HttpClient)

    // μαζί με τις παραμέτρους δηλώνω και τον τύπο τους και την αρχική τους τιμή
    getWeather(city: string = 'Athens', country: string = 'Greece') {
    return this.http.get<WeatherResponse>(
      `${baseUrl}${city},${country}&units=metric&appid=${environment.weatherApiKey}`, {
        //Σημαίνει: θέλω να μου στείλεις δεδομένα σε JSON μορφή
        headers:{
          Accept: "application/json"
        }
      }
    )
  }
}
