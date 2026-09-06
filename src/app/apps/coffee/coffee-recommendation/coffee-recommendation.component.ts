import { Component, inject } from '@angular/core';
import { CoffeeStore } from '../coffee.store';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoffeeChartService } from '../coffee.chart.service';
import { PlotlyBarChartComponent } from '../../../shared/page-components/plotly-bar-chart/plotly-bar-chart.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogWindowComponent } from '../../../shared/ui-components/dialog-window/dialog-window.component';
import { DialogWindowInformation } from '../../../shared/models';

@Component({
  selector: 'app-coffee-recommendation',
  imports: [CommonModule, ScrollingModule, MatExpansionModule, MatTabsModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule, PlotlyBarChartComponent],
  templateUrl: './coffee-recommendation.component.html',
  styleUrl: './coffee-recommendation.component.scss'
})
export class CoffeeRecommendationComponent {
  coffeeStore = inject(CoffeeStore);
  coffeeChartService: CoffeeChartService = inject(CoffeeChartService);

  readonly dialog: MatDialog = inject(MatDialog);

  /**
   * Open dialog window to view coffee flavour reference guide
   */
  openDialogWindow(type: string, name: string, guide: string): void {
    // https://github.com/kjeshang/NespressoMetropolisCoffeeFlavourReferenceGuide/tree/main//Guides/OL1_Ispirazione%20Napoli_Current.pdf 
    // console.log(guide);
    // console.log(guide.split("main//"))
    const pdfPath: string = guide.split("main//")[1];
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
