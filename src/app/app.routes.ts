import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { News } from './pages/news/news';
import { SocialProjects } from './pages/social-projects/social-projects';

export const routes: Routes = [
  { path: 'noticias', component: News},
  { path: 'home', component: Home },
  { path: 'sobre', component: About },
  { path: 'projetos', component: Projects },
  { path: 'contato', component: Contact },
  { path: 'projetos-sociais', component: SocialProjects },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];