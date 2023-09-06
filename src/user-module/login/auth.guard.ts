import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  let loggedIn = localStorage.getItem("currentUser")

  if (!loggedIn) {
    alert (" Please login First");
    return false;
  }

  return true;
};
