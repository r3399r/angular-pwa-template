import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Route,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomePage } from 'src/app/home/home.page';
import { ListComponent } from 'src/app/pages/list/list.component';

const rootRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
};

const publicRoute: Route = {
  path: 'home',
  component: HomePage,
};

const privateRoute: Route = {
  path: 'list',
  component: ListComponent,
};

const routes: Routes = [rootRoute, publicRoute, privateRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
