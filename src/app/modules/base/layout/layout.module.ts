import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => 
          import('../../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'form',
        loadChildren: () => 
          import('../../form/form.module').then(
            (m) => m.FormModule
          ),
      },
      {
        path: 'avatar',
        loadChildren: () => 
          import('../../avatar/avatar.module').then(
            (m) => m.AvatarModule
          ),
      },
      {
        path: 'button',
        loadChildren: () => 
          import('../../button/button.module').then(
            (m) => m.ButtonModule
          ),
      },
      {
        path: 'grid-system',
        loadChildren: () => 
          import('../../grid/grid.module').then(
            (m) => m.GridModule
          ),
      },
      {
        path: 'panel',
        loadChildren: () => 
          import('../../panel/panel.module').then(
            (m) => m.PanelModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () => 
          import('../../notification/notification.module').then(
            (m) => m.NotificationModule
          ),
      },
      {
        path: 'sweet-alert',
        loadChildren: () => 
          import('../../sweetAlert/sweet-alert.module').then(
            (m) => m.SweetAlertModule
          )
      },
      {
        path: 'font-awesome',
        loadChildren: () => 
          import('../../font/font.module').then(
            (m) => m.FontModule
          ),
      },
      {
        path: 'simple-line-icon',
        loadChildren: () => 
          import('../../simpleLineIcon/simple-line-icon.module').then(
            (m) => m.SimpleLineIconModule
          ),
      },
      {
        path: 'typography',
        loadChildren: () => 
          import('../../typography/typography.module').then(
            (m) => m.TypographyModule
          ),
      },
      {
        path: 'table',
        loadChildren: () => 
          import('../../table/table.module').then(
            (m) => m.TableModule
          ),
      },
      {
        path: 'datatable',
        loadChildren: () => 
          import('../../datatable/datatable.module').then(
            (m) => m.DatatableModule
          ),
      },
      {
        path: 'google-map',
        loadChildren: () => 
          import('../../googleMap/google-map.module').then(
            (m) => m.GoogleMapModule
          ),
      },
      {
        path: 'jsvector-map',
        loadChildren: () => 
          import('../../jsvectormap/jsvectormap.module').then(
            (m) => m.JsvectormapModule
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
