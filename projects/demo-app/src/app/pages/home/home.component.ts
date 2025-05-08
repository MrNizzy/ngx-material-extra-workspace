import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from 'ngx-material-extra';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AvatarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  title = 'NGX Material Extra';
}
