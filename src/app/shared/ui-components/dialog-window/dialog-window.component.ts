import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DialogWindowInformation } from '../../models';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-window',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './dialog-window.component.html',
  styleUrl: './dialog-window.component.scss'
})
export class DialogWindowComponent {
  readonly dialogRef: MatDialogRef<DialogWindowComponent> = inject(MatDialogRef<DialogWindowComponent>);
  data: DialogWindowInformation = inject(MAT_DIALOG_DATA);

  sanitizer: DomSanitizer = inject(DomSanitizer);
  pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.link);
}
