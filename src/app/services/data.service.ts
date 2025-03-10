import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,from,merge,interval} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map, filter, catchError, tap,mergeMap,first,take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private apiUrl='http://localhost:5000/api/auth'

  constructor(private http:HttpClient) { }
    

 register(user:any):Observable<any>{
  return this.http.post(this.apiUrl+'/register',user)
 }

 login(user:any):Observable<any>{
  return this.http.post(this.apiUrl+'/login',user)
 }
  
}
