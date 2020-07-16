import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTableModule, DXCToggleModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ToggleTablePropertiesComponent } from '../../components/examples/toggle/properties/toggle-table-properties/toggle-table-properties.component';
import { ToggleExampleComponent } from '../../components/examples/toggle/toggle-example/toggle-example.component';
import { ToggleDarkComponent } from '../../components/examples/toggle/toggle-dark/toggle-dark.component';
import { ToggleDefaultComponent } from '../../components/examples/toggle/toggle-default/toggle-default.component';
import { ToggleIconComponent } from '../../components/examples/toggle/toggle-icon/toggle-icon.component';
import { ToggleOutlinedComponent } from '../../components/examples/toggle/toggle-outlined/toggle-outlined.component';

@NgModule({
  declarations: [
    ToggleComponent,
    ToggleDarkComponent,
    ToggleDefaultComponent,
    ToggleExampleComponent,
    ToggleIconComponent,
    ToggleOutlinedComponent,
    ToggleTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcTableModule,
    TabbedSectionModule,
    DXCToggleModule,
    ExampleViewerModule,
    DxcTagModule
  ],
  exports: [
    ToggleComponent,
    ToggleDarkComponent,
    ToggleDefaultComponent,
    ToggleExampleComponent,
    ToggleIconComponent,
    ToggleOutlinedComponent,
    ToggleTablePropertiesComponent
  ]
})
export class ToggleModule { }
