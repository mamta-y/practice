import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoDirective } from './demo.directive';
import { FormsComponent } from './forms/forms.component';
import { ReactformComponent } from './reactform/reactform.component';
import { RegisterComponent } from './register/register.component';
import { NewzComponent } from './newz/newz.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationInterceptor } from './authorization.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddComponent,
    BindingComponent,
    DemoDirective,
    FormsComponent,
    ReactformComponent,
    RegisterComponent,
    NewzComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
   
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
