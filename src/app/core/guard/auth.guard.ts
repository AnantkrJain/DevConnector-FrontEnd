import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate,
} from "@angular/router";
import { Observable } from "rxjs";
import { UtilsService } from "../services/utils.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private utils: UtilsService) {}
  canActivate() {
    //check for the token, got or not?
    if (window.localStorage.getItem("jwtToken")) {
      //check for validity of token, valid or not?
      let currentTime = Date.now() / 1000;
      let currentUser = JSON.parse(window.localStorage.getItem("currentUser"));

      if (!(currentUser.exp < currentTime)) {
        return true;
      } else {
        //token is invalid
        this.utils.authSubject.next(true);
        this.router.navigate(["/auth/login"]);
        return false;
      }
    } else {
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
