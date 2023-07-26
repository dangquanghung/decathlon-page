// features-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressionComponent } from './progression/progression.component';
import { ExplorationComponent } from './exploration/exploration.component';
import { CreationComponent } from './creation/creation.component';
import { AnalysisComponent } from './analysis/analysis.component';

const routes: Routes = [
  { path: 'progress', component: ProgressionComponent },
  { path: 'explore', component: ExplorationComponent },
  { path: 'create', component: CreationComponent },
  { path: 'analysis', component: AnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
