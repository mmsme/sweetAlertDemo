import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sweetalert-demo';

  tinyAlert() {
    Swal.fire({
      html: '<img src="assets/succes.svg" class="icon"></img><h3>Your Account Verified</h3>',
      showConfirmButton: false,
    });
  }
}
