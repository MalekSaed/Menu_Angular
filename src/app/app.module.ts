import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [
        AppComponent,
        MonitoringComponent,
        SettingsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        appRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
