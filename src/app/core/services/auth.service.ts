import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = 'FAKE_TOKEN';

  getToken(): string {
    return this.token;
  }
}
