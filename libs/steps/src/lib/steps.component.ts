import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  CardComponent,
  InputComponent,
  ButtonComponent,
  RadioComponent,
  CheckboxComponent
} from '@form-builder-app/ui-kit';
import { StepsService, IStep } from '@form-builder-app/steps-feature';
import { SessionManagerService } from '@form-builder-app/session-manager';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'lib-steps',
  standalone: true,
  imports: [
    CardComponent,
    InputComponent,
    CommonModule,
    ButtonComponent,
    RadioComponent,
    CheckboxComponent,
    FormsModule
  ],
  template: `
    <div class="flex flex-col h-full justify-center">
      <h1 class="text-2xl text-white text-center font-bold tracking-wider mb-6">Step form builder</h1>
      <div class="text-center mb-3">Current step: {{stepsService.currentStepIndex() + 1}} of {{ stepsService.steps().length}}</div>
      <div class="text-center">
       <div class="w-2/3 m-auto">
         <lib-card *ngIf="stepsService.currentStep()">
           <div card-header>
             <div class="text-3xl text-blue-950">{{ stepsService.currentStep().question }}</div>
           </div>
           <div card-body>
             <div *ngIf="stepsService.currentStep()?.controls">
              <form #answerForm="ngForm">
                <div *ngFor="let control of stepsService.currentStep().controls">
                  <lib-input
                    *ngIf="control.type === 'text'"
                    [label]="control.label"
                    [(ngModel)]="model[control.slug]"
                    [name]="control.slug"
                  ></lib-input>
                  <lib-radio
                    *ngIf="control.type==='radio'"
                    [label]="control.label"
                    [items]="control.options"
                    [(ngModel)]="model[control.slug]"
                    [name]="control.slug"
                  ></lib-radio>
                  <lib-checkbox
                    *ngIf="control.type==='checkbox'"
                    [label]="control.label"
                    [items]="control.options"
                    [(ngModel)]="model[control.slug]"
                    [name]="control.slug"
                  ></lib-checkbox>
                </div>
              </form>
             </div>
           </div>
           <div card-footer>
            <div class="flex gap-2">
              <lib-button (clicked)="dropSession()"
              >Start again</lib-button>
             <div class="ml-auto">
               <lib-button
                 (clicked)="stepsService.previousStep()"
                 *ngIf="stepsService.hasPreviousStep()"
               >Previous</lib-button>
               <lib-button
                 *ngIf="stepsService.hasNextStep()"
                 (clicked)="nextQuestion()"
               >Next</lib-button>
             </div>
            </div>
           </div>
         </lib-card>
       </div>
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
export class StepsComponent implements  OnInit {
  stepsService = inject(StepsService)
  router = inject(Router)
  sessionService = inject(SessionManagerService)
  model: { [key: string]: number; } = {};

  ngOnInit() {
    this.stepsService.getSteps()
  }

  nextQuestion() {
    this.stepsService.saveStep(this.model).subscribe(
      () => {
        this.stepsService.nextStep()
      })
  }

  dropSession() {
    this.sessionService.dropSession()
    return this.router.navigate(['/'])
  }

}
