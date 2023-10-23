import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    //@Input() usersFromHomeComponent: any; //allowing the child to get data from parent
    //@Output() userFromRegisterPage: any; //Allowing the child to send data to parent
    @Output() cancelRegister = new EventEmitter();
    model: any = {}
    constructor(private accountService: AccountService,private router: Router, private toaster: ToastrService) {}

    ngOnInit(): void {        
    }

    //Register action
    register(){
      this.accountService.register(this.model).subscribe({
      /*   next: response=> {
          //console.log(response);
          this.cancel()//to close our register form
        }, */

        next: () => {
          this.cancel()//to close our register form
          this.router.navigateByUrl('/members')
        },
        
        //error: error=> console.log(error) 
        //error: error=> this.toaster.error(error.error) //To dispay error using ngx-toastr

        error: error=> {
          this.toaster.error(error.error),
          console.log(error)
        }      
      })
      console.log(this.model);
    }

    //Cancel registration action
    cancel(){
      this.cancelRegister.emit(false); // to turn of the register mode from 
    }
}
