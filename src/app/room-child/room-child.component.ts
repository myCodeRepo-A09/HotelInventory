import { Component, Input,OnInit ,OnChanges ,SimpleChange, SimpleChanges,Output,EventEmitter,ContentChild,ElementRef,AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-room-child',
  templateUrl: './room-child.component.html',
  styleUrls: ['./room-child.component.css']
})
export class RoomChildComponent implements OnInit,AfterContentInit {
@Input() name:string='';
@Output() counterChange=new EventEmitter<number>();
@ContentChild('projectedDiv', { static: false }) projectedDiv!: ElementRef;
private count=0
  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.name){
      console.log('ngOnChanges')
      // console.log(changes.name.currentValue)
      // console.log(changes.name.previousValue)
      // console.log(changes.name.firstChange)
    }
  }
  ngAfterContentInit() {
    console.log(this.projectedDiv.nativeElement.textContent); // Output: "This is projected content"
  }

  ngOnInit(): void {
  }
 increment(){
  this.count++
  console.log(this.count)
  this.counterChange.emit(this.count)
 }
}
