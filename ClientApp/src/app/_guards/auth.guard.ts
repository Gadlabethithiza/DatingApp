import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  //When user is not loggedIn must be stopped before accessing any component
  return accountService.currentUser$.pipe(
    map(user => {
      if(user) return true;
      else {
          toastr.error('you must be loggedIn to access this page!');
          return false;
      }
    })
  )
};
