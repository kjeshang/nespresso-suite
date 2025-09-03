import { Component, inject } from '@angular/core';
import { FeatureContainerComponent } from '../../../shared/page-components/feature-container/feature-container.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-first-aid-page',
  imports: [FeatureContainerComponent, MatButtonModule],
  templateUrl: './first-aid-page.component.html',
  styleUrl: './first-aid-page.component.scss'
})
export class FirstAidPageComponent {
  filePath: string = 'data/First Aid Matrix Guide.pdf'
  dropboxUrl: string = 'https://www.dropbox.com/scl/fi/cntqfwcxsvakmgaovhey7/First-Aid-Matrix-Guide.pdf?rlkey=fl6ni7rnis5njzug7buubalc8&e=1&dl=0';

  sanitizer: DomSanitizer = inject(DomSanitizer);
  pdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.filePath);
}
