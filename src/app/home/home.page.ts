import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public async onClick() {
    this.router.navigate(['/list']);
  }
}
