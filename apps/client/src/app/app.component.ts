import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent, LayoutComponent } from '@form-builder-app/ui-kit';
@Component({
  standalone: true,
  imports: [ContainerComponent, LayoutComponent, RouterModule],
  selector: 'app-root',
  template:`
    <lib-layout>
      <lib-container>
        <router-outlet></router-outlet>
      </lib-container>
    </lib-layout>
  `
})
export class AppComponent {
  title = 'Step form builder app';
}
