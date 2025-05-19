import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WeatherResponse  } from '../../shared/interfaces/weather'

@Component({
  selector: 'app-http-client',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent {
  // επειδη το service εχει @Injectable
  weatherService = inject(WeatherService)

  // το weatherData έρχετε απο το interface μου. προσθέθηκε λίγο αργότερα αφου έκανα log την πρώτη κλήσει για να δω τι μου επιστρέφει και τι τύπου είναι
  weatherData: WeatherResponse  | null = null;

  // τι τρέχει κάθε φορα που κάνει refresh
  // : void σημαίνει οτι δεν επιστρέφει τίποτα
  ngOnInit(): void{
    this.refreshWeather()
  }

  /*
  Ένα Observable είναι σαν Promise, αλλά:
  Για να "το ενεργοποιήσεις" → κάνεις .subscribe()
  Για Promise → κάνεις await ή .then(...)
  Σύγκριση:
  // Observable
  this.http.get(...).subscribe(data => console.log(data));
  // Promise
  const data = await axios.get(...);
  console.log(data);
  Και τα δύο περιμένουν ασύγχρονα αποτελέσματα — απλώς το Observable είναι πιο "πλούσιο" (μπορεί να στείλει πολλά events αντί για ένα μόνο).
  */
  refreshWeather(){
    this.weatherService.getWeather()
      .subscribe((data) => {
        console.log(data);
        // προστέθηκε αφου κάναμε ένα log σκέτο ωστε να μπορέσουμε να φτιάξουμε το interface
        this.weatherData = data 
      })
  }
}
