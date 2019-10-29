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
    path: 'home/maintenance-order/maintenance-order', 
    loadChildren: () => import('./home/maintenance-order/maintenance-order.module').then(m => m.MaintenanceOrderPageModule)
  },
  { 
    path: 'home/maintenance-order/resume',
    loadChildren: () => import('./home/maintenance-order/resume.module').then(m => m.ResumePageModule)
  },
  { 
    path: 'home/maintenance-order/problems',
    loadChildren: () => import('./home/maintenance-order/problems.module').then(m => m.ProblemsPageModule)
  },
  { 
    path: 'home/maintenance-order/components', 
    loadChildren: () => import('./home/maintenance-order/components.module').then(m => m.ComponentsPageModule)
  },
  { 
    path: 'home/maintenance-order/hourWorked', 
    loadChildren: () => import('./home/maintenance-order/hour-worked.module').then(m => m.HourWorkedPageModule)
  },
  { 
    path: 'home/maintenance-order/assignature', 
    loadChildren: () => import('./home/maintenance-order/assignature.module').then(m => m.AssignaturePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
