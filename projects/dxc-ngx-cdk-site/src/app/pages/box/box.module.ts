import { NgModule } from "@angular/core";
import { DxcBoxModule, DxcTableModule,DxcTagModule } from '@dxc-technology/halstack-angular';
import { BoxComponent } from './box.component';
import { BoxBasicComponent } from '../../components/examples/box/box-basic/box-basic.component';
import { BoxExampleComponent } from '../../components/examples/box/box-example/box-example.component';
import { BoxTablePropertiesComponent } from '../../components/examples/box/properties/box-table-properties/box-table-properties.component';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    BoxComponent,
    BoxExampleComponent,
    BoxBasicComponent,
    BoxTablePropertiesComponent
    ],
  imports: [
    BrowserModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcBoxModule,
    DxcTableModule,
    DxcTagModule,
    ComponentsSidenavModule
  ],
  exports: [
    BoxExampleComponent,
    BoxBasicComponent,
    BoxTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class BoxModule {}
