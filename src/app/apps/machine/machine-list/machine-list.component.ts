import { Component, inject } from '@angular/core';
import { MachineStore } from '../machine.store';
import { CommonModule } from '@angular/common';
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogWindowInformation } from '../../../shared/models';
import { DialogWindowComponent } from '../../../shared/ui-components/dialog-window/dialog-window.component';

@Component({
  selector: 'app-machine-list',
  imports: [CommonModule, MatProgressSpinner, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss'
})
export class MachineListComponent {
  machineStore = inject(MachineStore);

  readonly dialog: MatDialog = inject(MatDialog);

  /**
   * Open dialog window to view coffee flavour reference guide
   */
  openDialogWindow(type: string, name: string, guide: string): void {
    const pdfPath: string = guide.split("main/")[1];
    const link: string = `https://kjeshang.github.io/NespressoMetropolisCoffeeFlavourReferenceGuide/${pdfPath}`;
    const dialogData: DialogWindowInformation = {
      title: `${type} - ${name}`,
      guide: guide,
      link: link
    };
    const dialogRef: MatDialogRef<DialogWindowComponent, any> = this.dialog.open(DialogWindowComponent, {
      width: "95vw",
      maxWidth: '100vw',
      height: "80vh",
      data: dialogData
    });
  }
}
