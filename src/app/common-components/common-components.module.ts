import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponentsRoutingModule } from './common-components-routing.module';
import { InputGroupComponent } from './input-group/input-group.component';
import { PrivateRouteComponent } from './private-route/private-route.component';
import { SelectListGroupComponent } from './select-list-group/select-list-group.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TextAreaFieldComponent } from './text-area-field/text-area-field.component';
import { TextFieldGroupComponent } from './text-field-group/text-field-group.component';

@NgModule({
  declarations: [InputGroupComponent, PrivateRouteComponent, SelectListGroupComponent, SpinnerComponent, TextAreaFieldComponent, TextFieldGroupComponent],
  imports: [
    CommonModule,
    CommonComponentsRoutingModule
  ]
})
export class CommonComponentsModule { }
