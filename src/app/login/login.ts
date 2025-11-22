import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html'
})
export class Login {

  errorMessage: string = '';

  login(usuario: string, password: string) {
    const userTest = 'juanma';
    const passTest = '1234';

    if (usuario === userTest && password === passTest) {
      this.errorMessage = '';
      console.log('Inicio de sesión correcto');
      // aquí puedes navegar a otra ruta si quieres
      // this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
