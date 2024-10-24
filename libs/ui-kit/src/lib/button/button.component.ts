import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  Output,
  HostListener,
  EventEmitter
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <button class="px-6 py-3 bg-blue-950 text-white rounded-3xl tracking-wider" (click)="onClick()">
      <ng-content></ng-content>
    </button>`,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<MouseEvent>()
  onClick() {
    this.clicked.emit()
  }
}
