import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

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
    constructor(private accountService: AccountService) {}

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
        },
        error: error=> console.log(error)      
      })
      console.log(this.model);
    }

    //Cancel registration action
    cancel(){
      this.cancelRegister.emit(false); // to turn of the register mode from 
    }
}
