import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './angularmaterial/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
