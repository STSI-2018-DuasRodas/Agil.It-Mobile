import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'home/notification', 
    loadChildren: './home/notification.module#NotificationPageModule' 
  },
  { 
    path: 'home/monitor', 
    loadChildren: './home/monitor.module#MonitorPageModule' 
  },
  { 
    path: 'home/maintenance-order/:id', 
    loadChildren: () => import('./home/maintenance-order/maintenance-order.module').then(m => m.MaintenanceOrderPageModule)
  },
  { 
    path: 'home/maintenance-order/problems',
    loadChildren: () => import('./home/maintenance-order/default/problems.module').then(m => m.ProblemsPageModule)
  },
  { 
    path: 'home/maintenance-order/hourWorked', 
    loadChildren: () => import('./home/maintenance-order/hour-worked.module').then(m => m.HourWorkedPageModule)
  },
  { 
    path: 'home/maintenance-order/assignature', 
    loadChildren: () => import('./home/maintenance-order/assignature.module').then(m => m.AssignaturePageModule)
  },
  { 
    path: 'configuration', 
    loadChildren: './configuration/configuration.module#ConfigurationPageModule' 
  },
  { path: 'observation', loadChildren: './home/maintenance-order/observation/observation.module#ObservationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
