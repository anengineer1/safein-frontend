import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}

}
