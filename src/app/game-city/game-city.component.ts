import { Component, OnInit } from '@angular/core';

import { Games } from '../model/game.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../service/game.service';
@Component({
    selector: 'app-game-city',
    templateUrl: './game-city.component.html',
    styleUrls: ['./game-city.component.css']
})
export class GameListComponent implements OnInit {
gameForm: FormGroup; 
amnt:any;
 constructor(private formBuilder: FormBuilder, private router: Router) { }

 ngOnInit() {
 this.gameForm=this.formBuilder.group({
 name:['',Validators.required,Validators.pattern("[a-zA-Z]{5,30}")],
 address:['',Validators.required]
 
 });
 }
 amount= new FormControl('');
 onSubmit(){
 
if(this.gameForm.invalid){
return;
 }
 localStorage.setItem("amt",this.amount.value);
 console.log(this.amnt);
 this.router.navigate(['/play']);
 }
 getAmount(){
 localStorage.setItem("amt",this.amount.value);
 }
}

