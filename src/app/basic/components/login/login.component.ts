import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../services/auth/auth.service';
import { UserStoargeService } from '../../services/storage/user-stoarge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
    
    ){

  }

  ngOnInit(){
    this.validateForm = this.fb.group({
      userName : [null, [Validators.required]],
      password : [null, [Validators.required]],
    })
  }


  submitForm(){
    this.authService.login(this.validateForm.get(['userName'])!.value, this.validateForm.get(['password'])!.value)
    .subscribe(res =>{
      console.log(res);
      if(UserStoargeService.isClientLoggedIn()){
        this.router.navigateByUrl('client/dashboard')
      }else if(UserStoargeService.isCompanyLoggedIn()){
        this.router.navigateByUrl('company/dashboard')
      }
    }, error =>{
      this.notification
      .error(
        'ERROR',
        `Bad crendentials`,
        { nzDuration: 5000 }
      )
    })
  }

}
