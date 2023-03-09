import { Observable } from 'rxjs';
import { LoginModel, RegistrationModel } from 'src/app/api/authentication';
import { User } from 'src/app/api/user';

export abstract class AuthenticationDataService {
  public authenticatedUser!: User | null;
  public abstract login$(loginModel: LoginModel): Observable<User | null>;
  public abstract register$(registrationModel: RegistrationModel): Observable<true>;
}
