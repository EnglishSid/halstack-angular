import { Component, Output, Input, OnChanges, EventEmitter } from "@angular/core";
@Component({
  selector: "dxc-file-preview-row",
  templateUrl: "./dxc-file-preview-row.component.html",
  styleUrls: ["./dxc-file-preview-row.component.scss"]
})
export class DxcFilePreviewRowComponent {

  @Input() file;
  fileFormat = "default";

  public ngOnInit() {
    if (this.file.format.includes("image")) {
      this.fileFormat ="image";
    } else if (this.file.format.includes("video")) {
      this.fileFormat = "video";
    } else if (this.file.format.includes("audio")) {
      this.fileFormat = "audio";
    }
  }

  public onCloseHandler(): void {
    this.file.removeFile();
  }
}
