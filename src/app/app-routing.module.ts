import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ListeAuteursComponent } from './components/liste-auteurs/liste-auteurs.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { EmpruntComponent } from './emprunt/emprunt.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ListeAuteurs', component: ListeAuteursComponent },
  { path: 'ListeLivres', component: ListeLivresComponent },
  { path: 'Emprunte', component:EmpruntComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
