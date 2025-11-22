import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private router: Router) {}

  logout() {
    // Aquí puedes limpiar datos si algún día usas localStorage:
    // localStorage.removeItem('user');

    console.log('Sesión cerrada');
    this.router.navigate(['/']);
  }
}
