import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "dxc-spinner",
  templateUrl: "./dxc-spinner.component.html",
  styleUrls: [
    "./dxc-spinner.component.scss",
    "./dxc-light-spinner.component.scss",
    "./dxc-dark-spinner.component.scss"
  ]
})
export class DxcSpinnerComponent {
  type: string = "indeterminate";
  @Input() theme: string = "light";
  @Input() value: number;
  @Input() label: string;
  @Input() showValue: boolean = false;
  @Input() overlay: boolean;
  @Input() mode: string = "large";

  @HostBinding("class.light") isLight: boolean = true;
  @HostBinding("class.dark") isDark: boolean = false;

  @HostBinding("class.overlay") isOverlayed: boolean = false;
  @HostBinding("class.small") isSmall: boolean = false;
  @HostBinding("class.large") isLarge: boolean = true;

  public ngOnChanges(): void {
    if (this.theme === "dark") {
      this.isLight = false;
      this.isDark = true;
    } else {
      this.isLight = true;
      this.isDark = false;
    }
    if (this.value || this.value === 0) {
      if (this.value <= 100 && this.value >= 0) {
        this.type = "determinate";
      } else {
        if(this.value > 100) {
          this.type = "determinate";
          this.value = 100;
        } else if(this.value < 0){
          this.type = "determinate";
          this.value = 0;
        } else {
          this.value = undefined;
          this.type = "indeterminate";
        }
      }
    } else {
      this.type = "indeterminate";
    }
    if (this.mode === "overlay") {
      this.isOverlayed = true;
      this.isLarge = false;
      this.isSmall = false;
    } else if (this.mode === "small") {
      this.isOverlayed = false;
      this.isLarge = false;
      this.isSmall = true;
    } else if (this.mode === "large") {
      this.isOverlayed = false;
      this.isLarge = true;
      this.isSmall = false;
    }
  }

  public ngOnInit(): void {
    if (this.value) {
      this.type = "determinate";
    }
  }
}
