//εδώ εχουμε τα διαφορετικά routes το single page app. αναλόγος σε ποιο url/ βρησκομαι θα έχει μια περιοχή στην οθόνη που θα μου εμφανίζει το περιεχόμενο του αντίστοιχου component. Πχ εδώ αν πάω στο /welcome θα μου εμφανίζει το WelcomeComponent

import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component'
import { RandomComponent } from './components/random/random.component'
import { HttpClientComponent } from './components/http-client/http-client.component'
import { TodoComponent } from './components/todo/todo.component';

export const routes: Routes = [
  { path: 'random', component: RandomComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'weather', component: HttpClientComponent},
  { path: 'todo', component: TodoComponent},
  { path: '', redirectTo:'/welcome', pathMatch:'full' }
];
