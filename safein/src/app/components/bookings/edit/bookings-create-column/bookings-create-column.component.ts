import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-bookings-create-column',
	templateUrl: './bookings-create-column.component.html',
	styleUrls: ['./bookings-create-column.component.scss']
})
export class BookingsCreateColumnComponent {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}
}
