import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="flex flex-col h-full justify-center">
      <h1 class="text-2xl text-white text-center font-bold tracking-wider mb-6">Step form builder</h1>
     <div class="text-center">
       <button routerLink="steps" class="px-6 py-3 bg-blue-950 text-white rounded-3xl tracking-wider">Join the survey</button>
     </div>
    </div>
  `,
  host: {
    class: 'h-full block py-2',
  },
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
