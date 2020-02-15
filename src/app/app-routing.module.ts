import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountComponent } from './account/account.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ElecroinicsComponent } from './elecroinics/elecroinics.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:"",component:ProductComponent}, 
{path:"ct",component:CartComponent},
{path:"ac",component:AccountComponent},
{path:"sb",component:SubCategoryComponent},
{path:"el",component:ElecroinicsComponent},
{path:"sb/ct",component:CartComponent},
{path:"el/ct",component:CartComponent},
{path:"log",component:LoginComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
