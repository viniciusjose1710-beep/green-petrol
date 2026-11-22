import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'sobre', component: About },
  { path: 'projetos', component: Projects },
  { path: 'contato', component: Contact },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];