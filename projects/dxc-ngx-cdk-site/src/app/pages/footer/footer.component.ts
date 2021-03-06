import { Component, OnInit } from '@angular/core';
import { Section } from '../../model/sections';
import { FooterTablePropertiesComponent } from '../../components/examples/footer/properties/footer-table-properties/footer-table-properties.component';
import { FooterExampleComponent } from '../../components/examples/footer/footer-example/footer-example.component';
import { FooterImportComponent } from '../../components/examples/footer/footer-import/footer-import.component';
import { FooterApiComponent } from '../../components/examples/footer/footer-api/footer-api.component';
import { FooterThemeComponent } from '../../components/examples/footer/footer-theme/footer-theme.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sections: Array<Section>;
  tagImg: string;

  constructor(){
    this.sections = new Array<Section>();
    this.tagImg = './assets/img/ready.svg';
  }

  ngOnInit() {
    this.sections.push( 
      {id:0, label: 'API',selector: 'footer-api', component: FooterApiComponent},
      {id:1, label: 'THEMING', selector: 'footer-theme', component: FooterThemeComponent},
      {id:2, label: 'EXAMPLES', selector: 'examples-component-footer', component: FooterExampleComponent}
      );
  }

}
