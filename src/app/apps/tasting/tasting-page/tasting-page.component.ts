import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tasting-page',
  imports: [FeatureContainerComponent, MatButtonModule],
  templateUrl: './tasting-page.component.html',
  styleUrl: './tasting-page.component.scss'
})
export class TastingPageComponent {
  filePath: string = 'data/How to Taste Nespresso Coffee.pdf';
  dropboxUrl: string = 'https://www.dropbox.com/scl/fi/4gqd527l48fuigeybj0ws/How-to-Taste-Nespresso-Coffee.pdf?rlkey=lzxmbnr2nkfyhaz1hj8u36pox&e=2&dl=0';

  sanitizer: DomSanitizer = inject(DomSanitizer);
  pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
}
