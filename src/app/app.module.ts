import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ItemPostComponent } from './components/item-post/item-post.component';
import { CardBodyComponent } from './components/card-body/card-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    ContactFormComponent,
    ItemPostComponent,
    CardBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
