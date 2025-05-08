import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from 'ngx-material-extra';

@Component({
  selector: 'app-avatars',
  imports: [AvatarComponent],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarsComponent {}
