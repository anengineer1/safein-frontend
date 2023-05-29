import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

@Component({
	selector: 'app-room-hotels-columncreation',
	templateUrl: './room-hotels-columncreation.component.html',
	styleUrls: ['./room-hotels-columncreation.component.scss']
})
export class RoomHotelsColumncreationComponent implements OnInit {

	userRole: any = this.ts.getUser().role;

	constructor(private ts: TokenStorageService) {}

	ngOnInit(): void {

		this.userRole = this.ts.getUser().role;
		console.log(this.userRole);
	}

}
