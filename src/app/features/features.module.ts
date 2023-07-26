import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressionComponent } from './progression/progression.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { CreationComponent } from './creation/creation.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [
    ProgressionComponent,
    ExplorationComponent,
    CreationComponent,
    AnalysisComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [
    ProgressionComponent,
    ExplorationComponent,
    CreationComponent,
    AnalysisComponent,
  ],
})
export class FeaturesModule {}
