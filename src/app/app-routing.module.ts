import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TShirtComponent } from './pages/t-shirt/t-shirt.component';
import { PantsComponent } from './pages/pants/pants.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 't-shirt', component: TShirtComponent },
  { path: 'pants', component: PantsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
