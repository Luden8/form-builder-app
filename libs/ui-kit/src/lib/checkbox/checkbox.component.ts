import {
  ChangeDetectionStrategy,
  Component, Input,
  ViewEncapsulation,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col text-left mb-3">
      <div class="mb-1 text-base">{{  label  }}</div>
      <div *ngIf="items">
        <div *ngFor="let option of items">
          <input
            type="checkbox"
            class="grow-0"
            [value]="option"
            [checked]="isSelected(option.value)"
            (change)="onCheckboxChange($event, option.value)"
            [id]="option.value + '_id'"
          >
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
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label: string | undefined
  @Input() hasError: boolean | undefined
  @Input() disabled: boolean | undefined
  @Input() items: Array<{ label: string, value: string}> | undefined
  value: string[] = [];
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string[]): void {
    this.value = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isSelected(option: string): boolean {
    return this.value.includes(option);
  }

  onCheckboxChange(event: Event, option: string): void {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.value = [...this.value, option];
    } else {
      this.value = this.value.filter((item) => item !== option);
    }

    this.onChange(this.value);
    this.onTouched();
  }
}
