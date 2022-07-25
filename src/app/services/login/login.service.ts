import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ICredentials } from '../../interfaces/credentials/credentials';
import { ITokenResponse } from '../../interfaces/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  subscriptions: Subscription[] = [];
  public readonly loggedUserStorageKey = 'loggedUser';
  public readonly apiBase = 'https://api.themoviedb.org/3';
  public readonly apiKey = '8a732f489f66fcfb6feee9839dc02d76';

  constructor(private http: HttpClient, private router: Router, private storage: Storage, private alertController: AlertController) {}

  /* Shows error messages */
  async presentAlert(text: string, button: string) {
    const alert = await this.alertController.create({
      header: text,
      buttons: [
        {
          text: button,
        }
      ]
    });

    await alert.present();
  }

  /* Verify and perform user login */
  public login(credentials: ICredentials) {
    const newToken = this.http.get(`${this.apiBase}/authentication/token/new?api_key=${this.apiKey}`).subscribe(
        (newTokenResponse: ITokenResponse) => {
          const validationSubscription = this.http.post(
            `${this.apiBase}/authentication/token/validate_with_login?api_key=${this.apiKey}`,
            {
              username: credentials.email,
              password: credentials.password,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              request_token: newTokenResponse.request_token
            })
            .subscribe(
              async (validateLogin: ITokenResponse) => {
                if (validateLogin?.success) {
                  await this.storage.set(
                    this.loggedUserStorageKey,
                    {
                      email: credentials.email,
                      password: credentials.password,
                      token: validateLogin.request_token
                    });
                  this.router.navigateByUrl('/home');
                }
              },
              error => {
                /* Credentials are wrong */
                this.presentAlert('Wrong username or password', 'Try again');
              }
            );
          this.subscriptions.push(validationSubscription);
        },
        error => {
          /* System error - Token creation error */
          this.presentAlert('Oops! Something went wrong but it is not your fault', 'Try again');
        });
    this.subscriptions.push(newToken);
  }

}
