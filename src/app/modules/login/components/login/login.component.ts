import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.profileForm.value).subscribe(x => {
      localStorage.setItem('id', x.id);
      this.router.navigate(['feed']);
    });
  }

}
