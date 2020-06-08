import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'text-info',
  templateUrl: './text-input-info.component.html',
  styleUrls: ['./text-input-info.component.scss']
})
export class TextInputInfoComponent {

  inputValue = "";

  options = ["One", "Two", "Three"];
  filteredOptions = this.options;
  error = "true";

  constructor() {
    this.autocompleteAsync = this.autocompleteAsync.bind(this);
  }

  onBlur(value){
    console.log('Blur event ' + value);
  }

  onChangeControlled(value) {
    console.log(value);
  }

  onChange(value){
    this.inputValue  = value;
    console.log('Change event ' + value);
  }

  onChangeUncontrolled(value){
    console.log('Change uncontrolled event ' + value);
  }

  onPrefixClick() {
    console.log('onPrefixClick event');
  }

  onSuffixClick() {
    console.debug('onSuffixClick Clicked');
  }

  autocompleteAsync(){
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(this.inputValue.toLowerCase())
    );
    return of(this.filteredOptions).pipe(delay(2000));
    
  }
}
