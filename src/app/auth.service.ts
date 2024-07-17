import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private dummyUser = { username: 'testuser', password: 'password123' };

  login(username: string, password: string): boolean {
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
  }
}
