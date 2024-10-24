import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { IStep } from './Step.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps: WritableSignal<IStep[]> = signal([])

  currentStepIndex = signal(0)

  currentStep = computed(() => this.steps()[this.currentStepIndex()])
  hasPreviousStep = computed(() => this.currentStepIndex() > 0)
  hasNextStep = computed(() => this.currentStepIndex() < this.steps().length - 1)

  constructor(private http: HttpClient) {
  }


  nextStep() {
    this.currentStepIndex.update((currentValue) => currentValue + 1)
  }

  previousStep() {
    this.currentStepIndex.update((currentValue) => currentValue - 1)
  }

  getSteps() {
     return this.http.get<IStep[]>(`/api/steps/`).subscribe((steps: IStep[]) => {
       this.steps.set(steps)
     })
  }

  saveStep(step: { [key: string]: number; }) {
    return this.http.post('http://localhost:4200/api/answers', step)
  }

}
