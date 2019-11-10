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
    loadChildren: () => import('./home/monitor.module').then(m => m.MonitorPageModule)
  },
  { 
    path: 'home/notification', 
    loadChildren: () => import('./home/notification.module').then(m => m.NotificationPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/default', 
    loadChildren: () => import('./home/maintenance-order/default/default.module').then(m => m.DefaultPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/list', 
    loadChildren: () => import('./home/maintenance-order/list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/route', 
    loadChildren: () => import('./home/maintenance-order/route/route.module').then(m => m.RoutePageModule)
  },
  { 
    path: 'home/maintenance-order/:id/:type/resume', 
    loadChildren: () => import('./home/maintenance-order/tabs/resume.module').then(m => m.ResumePageModule)
  },
  { 
    path: 'home/maintenance-order/:id/:type/problems',
    loadChildren: () => import('./home/maintenance-order/tabs/problems.module').then(m => m.ProblemsPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/:type/components', 
    loadChildren: () => import('./home/maintenance-order/tabs/components.module').then(m => m.ComponentsPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/:type/hourWorked', 
    loadChildren: () => import('./home/maintenance-order/tabs/hour-worked.module').then(m => m.HourWorkedPageModule)
  },
  { 
    path: 'home/maintenance-order/:id/:type/assignature', 
    loadChildren: () => import('./home/maintenance-order/tabs/assignature.module').then(m => m.AssignaturePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
