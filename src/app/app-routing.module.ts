import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { DisplayComponent } from './display/display.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { NewzComponent } from './newz/newz.component';
import { ParentComponent } from './parent/parent.component';
import { ReactformComponent } from './reactform/reactform.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [{path:'display',component:DisplayComponent , data:{roles :["admin","user"]},canActivate:[AuthGuard]},
{path:'binding',component:BindingComponent},
{path:'forms',component:FormsComponent},{path:'reactform',component:ReactformComponent},
{path:'add',component:AddComponent,data:{roles :["admin"]},canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},{path:'newz',component:NewzComponent},{path:'parent',component:ParentComponent},{path:'child',component:ChildComponent},{
  path:'login',component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
