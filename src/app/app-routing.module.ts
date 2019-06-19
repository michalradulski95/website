import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidePagePricelistComponent } from './side-page-pricelist/side-page-pricelist.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SidePageContactComponent } from './side-page-contact/side-page-contact.component';
import { SidePageBuyoutComponent } from './side-page-buyout/side-page-buyout.component';

const routes: Routes = [
  {path: 'priceList', component: SidePagePricelistComponent},
  {path: 'buyOut', component: SidePageBuyoutComponent},
  {path: 'contact', component: SidePageContactComponent},
  {path: '', pathMatch: 'full', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SidePagePricelistComponent, MainPageComponent, SidePageContactComponent, SidePageBuyoutComponent]
