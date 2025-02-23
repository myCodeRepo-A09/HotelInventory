import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  id:Observable<number>=this.router.params.pipe(map((params)=>params['id']))
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
