import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcLinkModule, DxcTableModule,DxcTagModule } from "@dxc-technology/halstack-angular";

import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';

import { LinkExampleComponent } from '../../components/examples/link/link-example/link-example.component';
import { LinkDefaultComponent } from '../../components/examples/link/link-default/link-default.component';
import { LinkUndercoratedComponent } from '../../components/examples/link/link-undercorated/link-undercorated.component';
import { LinkThemedComponent } from '../../components/examples/link/link-themed/link-themed.component';
import { LinkIconComponent } from '../../components/examples/link/link-icon/link-icon.component';
import { LinkTablePropertiesComponent } from '../../components/examples/link/properties/link-table-properties/link-table-properties.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

@NgModule({
  declarations: [
    LinkComponent,
    LinkExampleComponent,
    LinkDefaultComponent,
    LinkUndercoratedComponent,
    LinkThemedComponent,
    LinkIconComponent,
    LinkTablePropertiesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxcLinkModule,
    DxcTableModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTagModule,
    ComponentsSidenavModule
  ],
  exports:[
    LinkComponent,
    LinkExampleComponent,
    LinkDefaultComponent,
    LinkUndercoratedComponent,
    LinkThemedComponent,
    LinkIconComponent,
    LinkTablePropertiesComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class LinkModule { }
