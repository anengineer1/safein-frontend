import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-customer-create-column',
	templateUrl: './customer-create-column.component.html',
	styleUrls: ['./customer-create-column.component.scss']
})
export class CustomerCreateColumnComponent {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}
}
