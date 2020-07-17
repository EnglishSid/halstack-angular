import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from 'src/app/model/data-properties-table';

@Component({
  selector: 'app-progressbar-table-properties',
  templateUrl: './progressbar-table-properties.component.html',
  styleUrls: ['./progressbar-table-properties.component.scss']
})
export class ProgressbarTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}
