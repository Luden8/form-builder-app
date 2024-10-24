import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="border rounded-xl bg-white px-6">
    <div class="border-b pb-6 sticky top-0 bg-white pt-6">
      <ng-content select="[card-header]"></ng-content>
    </div>
    <div class="py-6">
      <ng-content select="[card-body]"></ng-content>
    </div>
    <div class="pt-6 sticky bottom-0 bg-white pb-6 border-t">
      <ng-content select="[card-footer]"></ng-content>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
