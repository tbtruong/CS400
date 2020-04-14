import { Component } from '@angular/core';
import {WEATHERS} from "./Weather-Mock";
import { WEATHER } from './Weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  weathers = WEATHERS;
  private selectedWeather: WEATHER;

  selectWeather(weather: WEATHER){
    this.selectedWeather = weather;
  }
}
