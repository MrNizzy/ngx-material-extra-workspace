import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxMaterialExtraComponent } from 'ngx-material-extra';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxMaterialExtraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-app';
}
