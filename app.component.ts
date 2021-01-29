import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {data} from './data';
import Detail from 'src/app/model/Detail';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lists=[{_id:"123456",title:"dheeraj"}];
  tasks=[];
  contact:Detail;
  data=data;
  flag=false;
  pwd:string;
  listpassword:string;
  listId:string;
  today=new Date();
  date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
  time= this.today.getHours() + ":" + this.today.getMinutes() + ':' + this.today.getSeconds();
  group ={
    FirstName : new FormControl(''),
    LastName : new FormControl(''),
    MobilePhone: new FormControl(''),
    HomeAddress2: new FormControl(''),
    BusinessAddress2: new FormControl(''),
    email: new FormControl(''),
  }
  detailsform =new FormGroup(this.group);


  ngOnInit(): void {   

  }  
  open(l){
    this.flag=true;
    this.contact=l;

  }
  submit(){
    console.log(this.detailsform.value);
    alert("submitted succesfully");
  }


}

