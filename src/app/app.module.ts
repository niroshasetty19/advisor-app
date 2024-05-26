import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvisorListComponent } from './advisor-list/advisor-list.component';
import { AdvisorDetailsComponent } from './advisor-details/advisor-details.component';
import { AdvisorCreateComponent } from './advisor-create/advisor-create.component';
import { AdvisorEditComponent } from './advisor-edit/advisor-edit.component';
import { MaskSinPipe } from './mask-sin.pipe';
import { MaskPhonePipe } from './mask-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvisorListComponent,
    AdvisorDetailsComponent,
    AdvisorCreateComponent,
    AdvisorEditComponent,
    MaskSinPipe,
    MaskPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
