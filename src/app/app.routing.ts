import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { MonitoringComponent } from './monitoring/monitoring.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'monitoring', component: MonitoringComponent},
    {path: 'settings', component: SettingsComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);

