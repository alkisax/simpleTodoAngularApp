import { Component } from '@angular/core';
// αυτό μου φτιάχνει έναν χώρο ως tag για να εμφανίζονται τα περιεχόμενα του κάθε υποcomponent σε κάθε ψευδοσελίδα του single page app. παίρνει τα routes του απο το αρχείο app.routes.ts
// οτι μπαίνει εδώ πρέπει να προστεθεί και στο @component- imports [A]
import { RouterOutlet } from '@angular/router';
import { ListMenuComponent } from './components/list-menu/list-menu.component'

@Component({
  selector: 'app-root',
  // [A]
  imports: [RouterOutlet, ListMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpleTodoAngular';
}
