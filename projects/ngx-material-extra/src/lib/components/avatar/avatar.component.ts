import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

interface Avatar {
  acronym: string;
  size: 'small' | 'medium' | 'large' | 'extra-large';
  border: 'extra-large' | 'large' | 'medium' | 'small' | 'none';
}

@Component({
  selector: 'mat-extra-avatar',
  imports: [NgClass],
  template: `
    <div
      class="avatar"
      [ngClass]="[avatar().size, 'border-' + avatar().border]"
    >
      <span>
        {{ avatar().acronym }}
      </span>
    </div>
  `,
  styles: `
    .avatar {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background-color: var(--mat-sys-primary-container, --mat-extra-sys-primary-container);
      color: var(--mat-sys-on-primary-container, --mat-extra-sys-on-primary-container);
      font-weight: bold;
      text-align: center;
      cursor: pointer;
      user-select: none;
      box-shadow: var(--mat-sys-level1, var(--mat-extra-sys-level1));
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: var(--mat-sys-level2, var(--mat-extra-sys-level2));
      }
    }

    .small {
      font-size: 14px;
      width: var(--mat-extra-sys-avatar-small);
      height: var(--mat-extra-sys-avatar-small);
    }
    .medium {
      font-size: 18px;
      width: var(--mat-extra-sys-avatar-medium);
      height: var(--mat-extra-sys-avatar-medium);
    }
    .large {
      font-size: 24px;
      width: var(--mat-extra-sys-avatar-large);
      height: var(--mat-extra-sys-avatar-large);
    }
    .extra-large {
      font-size: 32px;
      width: var(--mat-extra-sys-avatar-extra-large);
      height: var(--mat-extra-sys-avatar-extra-large);
    }

    .border-small {
      border-radius: var(--mat-sys-corner-small, var(--mat-extra-sys-corner-small));
    }

    .border-medium {
      border-radius: var(--mat-sys-corner-medium, var(--mat-extra-sys-corner-medium));
    }

    .border-large {
      border-radius: var(--mat-sys-corner-large, var(--mat-extra-sys-corner-large));
    }

    .border-extra-large {
      border-radius: var(--mat-sys-corner-extra-large, var(--mat-extra-sys-corner-extra-large));
    }
  `,
})
export class AvatarComponent {
  public acronym = input<string>('Hola');
  public size = input<'small' | 'medium' | 'large' | 'extra-large'>('medium');
  public border = input<'extra-large' | 'large' | 'medium' | 'small' | 'none'>(
    'medium'
  );

  public avatar = computed<Avatar>(() => {
    return {
      acronym: this.acronym().toUpperCase().slice(0, 2),
      size: this.size(),
      border: this.border(),
    };
  });
}
