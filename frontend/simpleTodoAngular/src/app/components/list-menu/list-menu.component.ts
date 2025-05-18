import { Component } from '@angular/core';
// αυτά γίνανε import γιατί χρησιμοποιούνται στην html του menu.
// αυτό που κάνουν είναι να κάνουνε Link σε εσωτερικές ψευδοσελίδες
// οτι μπαίνει εδώ θα πρέπει να μπεί και παρακάτω στο imports [Α]
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  // [Α] μπαίνουν και εδώ
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.css'
})
export class ListMenuComponent {
  // αυτο το μενού θα εμπλουτιστεί σιγα σιγά με τις διαφορες επιλογές του μενού
  // τα text και linkName καλούνται στην html
  // το app-welcome απο το @component/selector του welcome component ts
  menu = [
    { text: 'Welcome', linkName: 'app-welcome' }
  ]
}
