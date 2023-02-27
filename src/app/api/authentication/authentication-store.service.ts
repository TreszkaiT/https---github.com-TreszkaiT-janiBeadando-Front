import { Observable } from 'rxjs';

import { User } from '../user';

export abstract class AuthenticationStoreService {
  public user!: User | null;
  public abstract getUser$(): Observable<User | null>;
  public abstract isLoggedIn$(): Observable<boolean>;
}
