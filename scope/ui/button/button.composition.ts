import { Component, NgModule } from '@angular/core';
import { ButtonModule } from './button.module';

@Component({
  selector: 'button-composition-cmp',
  template: `Button composition: <button></button>`
})
class ButtonCompositionComponent {}

@NgModule({
  declarations: [ButtonCompositionComponent],
  imports: [ButtonModule],
  bootstrap: [ButtonCompositionComponent]
})
export class ButtonCompositionModule {}
