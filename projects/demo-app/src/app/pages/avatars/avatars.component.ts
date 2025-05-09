import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatExtraAvatar } from '@ngx-material-extra/avatar/avatar.component';

@Component({
  selector: 'app-avatars',
  imports: [MatExtraAvatar],
  templateUrl: './avatars.component.html',
  styleUrl: './avatars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarsComponent {}
