import { Component, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,ViewChild, ElementRef, Injectable, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppHighlightDirective } from '../directives/app-highlight.directive';
import {room} from './rooms'
import { ReversePipe } from '../pipes/reverse.pipe';
import {SerachTextPipe} from '../pipes/serach-text.pipe'
import { DataService } from '../services/data.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RoomChildComponent } from '../room-child/room-child.component';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @ViewChild('myInput') myInput!: ElementRef;
  @ViewChild(RoomChildComponent) roomChildComponent!:RoomChildComponent
  message:string=''
  myPost:any[]=[]
  userForm:FormGroup
  constructor(private dataService: DataService,@Inject(APP_SERVICE_CONFIG) private appConfig:AppConfig) { 
    console.log('API ENDPOINT',this.appConfig.apiEndpoint)
  // this.dataService.currentMessage.subscribe(data=> this.message=data)

   this.userForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
   })
  }

  hotelName:string='Hotel Taj'
  numberOfRooms:number=50
  count:number=0;
  userName:any='Avinash'
  isActive:Boolean=false
  color:string='Red'
  roomList:room[]=[{
    Sr:1,
    Type:'AC',
    RoomNumber:122,
    Price:1200,
    Amenities:'AC,TV,Double Bed,Toiletries',
    CheckIn:new Date,
    Available:true
  },
  {
    Sr:2,
    Type:'NonAC',
    RoomNumber:123,
    Price:800,
    Amenities:'TV,Double Bed,Toiletries',
    CheckIn:new Date,
    Available:false
  },
  {
    Sr:3,
    Type:'NonAC',
    RoomNumber:124,
    Price:800,
    Amenities:'TV,Double Bed,Toiletries',
    CheckIn:new Date,
    Available:true
  }]


  productList:string[]=['Pen','Paper','Microphone','Pencil','Mouse','Red']
 inputText:string=''
  inputText1:string=''
  items:string[]=['Avinash','rakif','aksahy']
  user={
    name:'',
    email:''
  }
  submittedData: any = null;


  ngOnInit(): void {
    console.log('ngOnInit')
    // this.dataService.getPosts().subscribe((data) => {
    //   this.myPost = data; // Store API data
    // });
  }
 ngDoCheck():any{
  console.log('doCheck')
 }
 ngAfterContentInit() {
  console.log('Content initialized');
}

ngAfterContentChecked() {
  console.log('Content checked');
}
ngAfterViewInit() {
  console.log('View initialized:');
}

ngAfterViewChecked() {
  console.log('View checked');
}

ngOnDestroy() {

  console.log('Timer destroyed');
}
  increment():void{
    this.roomChildComponent.increment();
    this.count++
  }

  setCurrentMessage(message:string){
    //this.dataService.changeMessage(message)
  }

  onSubmit(){
  
  if(this.userForm.valid){
    this.submittedData=this.userForm.value
  }

  }
  counterChangeEvent(e:number){
    console.log(e)
    this.inputText1=e.toString()
  }
  focusInput() {
    this.myInput.nativeElement.focus(); // Focus the input element
  }
  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password')}
}
