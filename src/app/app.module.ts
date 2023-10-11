import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ModalTimeComponent } from './shared/components/modal-time/modal-time.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { OlapComponent } from './shared/components/olap/olap.component';
import { LoadingComponent } from './shared/components/olap/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalTimeComponent,
    SidebarComponent,
    HomeComponent,
    OlapComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
