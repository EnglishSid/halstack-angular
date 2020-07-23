import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WizardComponent } from './wizard.component';
import { DxcTableModule, DxcWizardModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { WizardTablePropertiesComponent } from '../../components/examples/wizard/properties/wizard-table-properties/wizard-table-properties.component';
import { WizardDefaultComponent } from '../../components/examples/wizard/wizard-default/wizard-default.component';
import { WizardUncontrolledComponent } from '../../components/examples/wizard/wizard-uncontrolled/wizard-uncontrolled.component';
import { WizardThemedComponent } from '../../components/examples/wizard/wizard-themed/wizard-themed.component';
import { WizardVerticalComponent } from '../../components/examples/wizard/wizard-vertical/wizard-vertical.component';
import { WizardExampleComponent } from '../../components/examples/wizard/wizard-example/wizard-example.component';
import { WizardImportComponent } from '../../components/examples/wizard/wizard-import/wizard-import.component';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';

@NgModule({
  declarations: [
    WizardComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardDefaultComponent,
    WizardThemedComponent,
    WizardVerticalComponent,
    WizardUncontrolledComponent,
    WizardImportComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcWizardModule,
    DxcTagModule,
    CodePlaygroundModule
  ],
  exports:[
    WizardComponent,
    WizardExampleComponent,
    WizardTablePropertiesComponent,
    WizardDefaultComponent,
    WizardThemedComponent,
    WizardVerticalComponent,
    WizardUncontrolledComponent,
    WizardImportComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class WizardModule { }
