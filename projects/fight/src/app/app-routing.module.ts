import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { IntroComponent } from './pages/intro/intro.component';
import { FaseComponent } from './pages/fase/fase.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'fase',
    component: FaseComponent
  },
  {  path: '**', redirectTo: 'intro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
