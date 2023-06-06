import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TShirtComponent } from './pages/t-shirt/t-shirt.component';
import { PantsComponent } from './pages/pants/pants.component';

const routes: Routes = [
  { path: '', component: TShirtComponent },
  { path: 'pants', component: PantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
