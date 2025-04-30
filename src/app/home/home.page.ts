import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isProd: string;
  environmentName: string;
  constructor() {
    this.isProd = environment.production.toString();
    this.environmentName = environment.envName;
  }
}
