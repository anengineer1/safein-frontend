import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { HandlesService } from 'src/app/_services/handles.service';
import { Handles } from 'src/app/entityclasses/handles';

@Component({
	selector: 'app-latest-bookingperuser',
	templateUrl: './latest-bookingperuser.component.html',
	styleUrls: ['./latest-bookingperuser.component.scss']
})
export class LatestBookingperuserComponent {

	handle: Handles | undefined | null = null;
	handleList: Handles[] = [];

    constructor(private handleService: HandlesService,
		private ts:TokenStorageService) {}

	assignHandle(hhandle: Handles): void {
		this.handle = hhandle;
	}
	ngOnInit(): void {
		this.listLatestsHandles();
	}

    listLatestsHandles() {
	    let ruser = this.ts.getUser();
	    this.handleService.listLatestsHandlesByUserEmail(ruser.email).subscribe(
			{
				next: (handles: Handles[]): void => {
					this.handleList = handles;
					console.log(this.handleList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}
}
