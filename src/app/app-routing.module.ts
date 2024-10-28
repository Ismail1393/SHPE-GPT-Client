import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyPageComponent } from './features/company/pages/company-page/company-page.component';
import { ShpeGPTPageComponent } from './features/shpe-gpt/pages/shpe-gpt-page/shpe-gpt-page.component';

const routes: Routes = [
  { path: '', component: ShpeGPTPageComponent },
  { path: 'shpegpt', component: ShpeGPTPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
