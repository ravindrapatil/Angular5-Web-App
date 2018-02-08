import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SubjectService {
  private user = new BehaviorSubject<string>('John');
  cast = this.user.asObservable();
  constructor() { }

  editUser(newUser) {
    this.user.next(newUser);
  }
}
