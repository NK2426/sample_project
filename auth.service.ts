import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


import { environment } from "../../environments/environment";
import { AuthData } from "./auth-data.model";

const BACKEND_URL = environment.apiUrl + "/user";
@Injectable({ providedIn: "root" })


export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http
    .post<{ token: string; expiresIn: number; userId: string }>(
      BACKEND_URL + "/login",
      authData
    ).subscribe(
      response => {
        console.log("respose on login");
        // const token = response.token;
        // this.token = token;
        // if (token) {
        //   const expiresInDuration = response.expiresIn;
        //   this.setAuthTimer(expiresInDuration);
        //   this.isAuthenticated = true;
        //   this.userId = response.userId;
        //   this.authStatusListener.next(true);
        //   const now = new Date();
        //   const expirationDate = new Date(
        //     now.getTime() + expiresInDuration * 1000
        //   );
        //   console.log(expirationDate);
        //   this.saveAuthData(token, expirationDate, this.userId);
        //   this.router.navigate(["/"]);
        // }
      },
      error => {
        console.log("error on response");
        this.authStatusListener.next(false);
      }
    );
}

    
  }

export class AccessProviders{}