import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-cities-countries-create-column',
	templateUrl: './cities-countries-create-column.component.html',
	styleUrls: ['./cities-countries-create-column.component.scss']
})
export class CitiesCountriesCreateColumnComponent {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}


}
