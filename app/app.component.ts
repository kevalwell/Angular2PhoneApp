import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div>
    	<h2>Please enter your last name below to unlock Kevins number.</h2>
    	<h4>**If you are an Alwell you must enter our last name and Uncle Hughs second sons first name. With no spaces.**</h4>
    	<div id="inputfield" class="row">
    	    <div class="col-lg-6">
    	      <div class="input-group">
    	        <input type="text" [(ngModel)]="credentials" class="form-control" placeholder="Enter: Last name">
    	        <span class="input-group-btn">
    	          <button class="btn btn-default" (click)="submitName(credentials)" type="button">Go!</button>
    	        </span>
    	      </div>
    	    </div>
    	  </div>
    	<div id="isValid" *ngIf="isValid">
    		<h4>Hello Family or Friend!</h4>
    		<h5> My New Number is: <b>848-228-9124</b></h5>
    		<h6>Please Shoot me a text with your name so I can save your number. Cheers!</h6>
    	</div>
    	<div id=noFriend *ngIf="noFriend">
    		<h4>Unfortunately your name was not on the list, this may be a mistake! Please reach out if you feel this is you.</h4>
    	</div>
    </div>
    `
})
export class AppComponent {
private isValid: boolean;
private credentials: any = '';
private noFriend: boolean;
private nameList = ['alwellryan', 'norman', 'stampone' , 'daoud', 'lair', 'desousa', 'petroff', 'sabbagh', 'nikko', 'shawnessy', 'vangelov', 'duca', 'califano', 'diaz', 'stimmel', 'conti', 'gjonibalaj', 'fielding', 'siyam', 'lampken', 'gottlieb', 'branen', 'duarte', 'burlew', 'farkas', 'badro', 'mccarthy', 'cece', 'haskoor', 'valenti', 'shaloo', 'barbieri', 'perez', 'cella', 'reddington', 'bannon', 'joshi'];

	constructor(){}
	

	submitName(name: any){
		name = name.toLowerCase();
		if(this.nameList.indexOf(name) > -1){
			this.isValid = true;
			this.noFriend = false;
			this.credentials = '';
			
		}
		else{
			this.noFriend = true;
			this.isValid = false;
			this.credentials = '';
		}
	}

}
