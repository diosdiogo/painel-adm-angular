import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/tamplate/header/header.component';
import { FooterComponent } from './components/tamplate/footer/footer.component';
import { NavComponent }  from './components/tamplate/nav/nav.component';

import { ButtonModule, CoreModule, IconsModule, ToolbarModule, SidebarModule } from 'truly-ui'; //Import Modules

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({theme: 'default'}),
    ButtonModule,
    IconsModule,
    ToolbarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
