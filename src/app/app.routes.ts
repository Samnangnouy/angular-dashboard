import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
          import('./modules/base/layout/layout.module').then((m) => m.LayoutModule),
    },
];
