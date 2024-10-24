import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col text-left mb-3">
      <div class="mb-1 text-base">{{ label }}</div>
      <div *ngIf="items">
        <div *ngFor="let option of items">
          <input
            type="radio"
            class="grow-0"
            [value]="option"
            [checked]="value === option.value"
            (change)="onRadioChange(option.value)"
            [id]="option.value + '_id'">
          <label class="ml-2" [for]="option.value + '_id'">{{ option.label }}</label>
        </div>
      </div>
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
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements  ControlValueAccessor{
  @Input() label: string | undefined
  @Input() hasError: boolean | undefined
  @Input() disabled: boolean | undefined
  @Input() items: Array<{ label: string, value: string}> | undefined
  value: string | null = null;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onRadioChange(option: string): void {
    this.value = option;
    this.onChange(this.value);
    this.onTouched();
  }
}
