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
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'configuration', 
    loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'home/monitor', 
    loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorPageModule)
  },
  { 
    path: 'home/notification', 
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/default', 
    loadChildren: () => import('./default/default.module').then(m => m.DefaultPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/list', 
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/route', 
    loadChildren: () => import('./route/route.module').then(m => m.RoutePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
