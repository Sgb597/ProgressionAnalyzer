import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  component: DropdownComponent;
  title = 'Progression Analyzer';

  constructor(private viewRef: ViewContainerRef) {}
  onAddDropdown() {
    const dropdownComp = this.viewRef.createComponent(
      this.component<DropdownComponent>
    );
    console.log('executing button');
  }
}
