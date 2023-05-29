import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
  selector: 'app-cities-countries',
  templateUrl: './cities-countries.component.html',
  styleUrls: ['./cities-countries.component.scss']
})
export class CitiesCountriesComponent implements OnInit{

    userRole:any = this.ts.getUser().role;

    constructor(private ts: TokenStorageService) { }

    ngOnInit(): void {

	this.userRole = this.ts.getUser().role;
	console.log(this.userRole);
    }

}
