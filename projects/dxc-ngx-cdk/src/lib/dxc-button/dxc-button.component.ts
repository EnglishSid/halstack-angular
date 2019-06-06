import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'dxc-button',
  templateUrl: './dxc-button.component.html',
  styleUrls: ['./dxc-button.component.scss', './dxc-light-button.component.scss', './dxc-dark-button.component.scss'],
})
export class DxcButtonComponent  {
  @Input() type: string;
  @Input() theme: string;
  @Input() disabled: boolean;
  @Input() disableRipple: boolean;
  @Input() text: string;
  @Input() iconType: string;
  @Input() icon: string;
  @Input() iconPosition: string;
  @HostBinding('class.light') isLight: boolean = true;
  @HostBinding('class.dark') isDark: boolean = false;


  ngOnChanges() { 
    if(this.theme  === 'dark') {
      this.isDark = true;
      this.isLight = false;
    }
  }
}
