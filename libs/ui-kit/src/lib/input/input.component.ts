import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  Input,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-col text-left mb-3">
      <label for="" class="mb-1 text-base">{{ label }}</label>
      <input type="text" class="border py-3 px-4"
       [value]="value || ''"
       (input)="onInput($event)"
       (blur)="onTouched()"
      >
      <div *ngIf="hasError" class="mt-1 text-sm">Error</div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent  implements ControlValueAccessor {
  @Input() label: string | undefined
  @Input() hasError: boolean | undefined
  @Input() disabled: boolean | undefined
  value = ''

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
  }
}
