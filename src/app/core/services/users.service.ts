import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get('../../assets/db/users.json').pipe(map((users: any) => users.find((user: any) => user.Id === userId)));
  }
}
