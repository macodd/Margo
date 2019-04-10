import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AddUserService {

    userActivated = new Subject();

    transferToUser(user) {
        this.userActivated.next(user);
    }
}
