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
  weatherService = inject(WeatherService)

  weatherData: WeatherResponse  | null = null;

  ngOnInit(): void{
    this.refreshWeather()
  }

  refreshWeather(){
    this.weatherService.getWeather()
      .subscribe((data) => {
        console.log(data);
        this.weatherData = data 
      })
  }
}
