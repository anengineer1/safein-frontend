import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-rooms-hotels',
	templateUrl: './rooms-hotels.component.html',
	styleUrls: ['./rooms-hotels.component.scss']
})
export class RoomsHotelsComponent {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}

}
