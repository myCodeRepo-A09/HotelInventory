import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,from,merge,interval} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map, filter, catchError, tap,mergeMap,first,take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
private message:string='I am coming from data service'
private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
private newMessage=new BehaviorSubject<string>('Default measage')
currentMessage=this.newMessage.asObservable();
  constructor(private http:HttpClient) { 
    let myObservable=of(1,2,3).
    pipe(map((x)=>x*x))
    myObservable.subscribe((x)=>{
      console.log('of',x)
    })

    let myObservable1=of(1,2,3).
    pipe(first())
    myObservable1.subscribe((x)=>{
      console.log('first',x)
    })

    const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
 
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));
 
  }

  get Message():string{
    return this.message
  }

  getPosts():Observable<any[]>{

    return this.http.get<any[]>(this.apiUrl)
  }

  changeMessage(newMessage:string){
    this.newMessage.next(newMessage)
  }
}
