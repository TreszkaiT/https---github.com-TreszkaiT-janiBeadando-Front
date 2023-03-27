import { Observable, of } from 'rxjs';                                                                // of() Creation operátor Observable-t készít;; emittál érétket
import { AuthenticationDataService, AuthenticationStoreService } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationStoreServiceImpl extends AuthenticationStoreService {

  constructor(private authenticationDataService: AuthenticationDataService){        // Dependency Injecion
    super();                                                                        // explicit konstruktor hozzáadásakor ehhez meg kell hívni a super ősosztályt
  }

  public getUser$(): Observable<User | null> {
    throw new Error('Method not implemented.');
  }

  public isLoggedIn$(): Observable<boolean> {                           // van-e aktuális User-ünk
    return of(!!this.authenticationDataService.authenticatedUser);      // !! = mindennél false, kivéve ha Objektum, User akkor true |||  of() Observable-ba teszi bele Observable<true> v. false lesz
  }                                                                     // !! minden objektumot lehet logikai értékké konvertálni javaScriptben, az eredeti logikai értékévé!!!
}                                                                       // null, undefined, "" üres string  = false logikailag  |||  object = true logikailag 
