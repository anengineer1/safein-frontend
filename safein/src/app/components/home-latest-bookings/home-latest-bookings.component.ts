import { Component, OnInit } from '@angular/core';
import { HandlesService } from 'src/app/_services/handles.service';
import { Handles } from 'src/app/entityclasses/handles';

@Component({
	selector: 'app-home-latest-bookings',
	templateUrl: './home-latest-bookings.component.html',
	styleUrls: ['./home-latest-bookings.component.scss']
})
export class HomeLatestBookingsComponent implements OnInit {

	handle: Handles | undefined | null = null;
	handleList: Handles[] = [];

	constructor(private handleService: HandlesService) {}

	assignHandle(hhandle: Handles): void {
		this.handle = hhandle;
	}
	ngOnInit(): void {
		this.listLatestsHandles();
	}

	listLatestsHandles() {
		this.handleService.listLatestsHandles().subscribe(
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
