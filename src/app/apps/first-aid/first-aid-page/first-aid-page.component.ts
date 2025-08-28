import { Component } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-first-aid-page',
  imports: [FeatureContainerComponent, PdfViewerModule],
  templateUrl: './first-aid-page.component.html',
  styleUrl: './first-aid-page.component.scss'
})
export class FirstAidPageComponent {
  filePath: string = 'data/First Aid Matrix Guide.pdf'

  pdfUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Path must be relative to /src/assets/
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
  }
}
