import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidePageCennikComponent } from './side-page-cennik/side-page-cennik.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SidePageKontaktComponent } from './side-page-kontakt/side-page-kontakt.component';
import { SidePageSkupujemyComponent } from './side-page-skupujemy/side-page-skupujemy.component';

const routes: Routes = [
  {path: 'priceList', component: SidePageCennikComponent},
  {path: 'buyOut', component: SidePageSkupujemyComponent},
  {path: 'contact', component: SidePageKontaktComponent},
  {path: '', pathMatch: 'full', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SidePageCennikComponent, MainPageComponent, SidePageKontaktComponent, SidePageSkupujemyComponent]
