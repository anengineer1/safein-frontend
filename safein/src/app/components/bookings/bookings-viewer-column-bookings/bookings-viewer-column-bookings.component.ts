import { Component, OnInit } from '@angular/core';
import { HandlesService } from 'src/app/_services/handles.service';
import { Handles } from 'src/app/entityclasses/handles';

@Component({
	selector: 'app-bookings-viewer-column-bookings',
	templateUrl: './bookings-viewer-column-bookings.component.html',
	styleUrls: ['./bookings-viewer-column-bookings.component.scss']
})
export class BookingsViewerColumnBookingsComponent implements OnInit {

	handle: Handles | undefined | null = null;
	handleList: Handles[] = [];

	constructor(private handleService: HandlesService) {}

	assignHandle(hhandle: Handles): void {
		this.handle = hhandle;
	}

	ngOnInit(): void {
		this.listAllHandles();
	}

	listAllHandles() {
		this.handleService.listAllHandles().subscribe(
			{
				next: (handles: Handles[]): void => {
				    this.handleList = handles;
				    console.log(this.handleList);
				},
				error: (error: any): void => { console.log(error) }
			}
		)
	}

	listHandleById(id: string): void {
		if (id) {
			this.handleService.getHandleById(id).subscribe(
				{
					next: (handle: Handles): void => {
						this.handleList = [handle];
					},
					error: (error: any): void => {
						console.log(error);
					}
				})
		} else {
			this.listAllHandles();
		}
	}

	listHandleByUserId(id: string): void {
		if (id) {
			this.handleService.getHandleByUserId(id).subscribe(
				{
					next: (handle: Handles[]): void => {
						this.handleList = handle;
					},
					error: (error: any): void => {
						console.log(error);
					}
				})
		} else {
			this.listAllHandles();
		}
	}

	listHandleByCustomerId(id: string): void {
		if (id) {
			this.handleService.getHandleByCustomerId(id).subscribe(
				{
					next: (handle: Handles[]): void => {
						this.handleList = handle;
					},
					error: (error: any): void => {
						console.log(error);
					}
				})
		} else {
			this.listAllHandles();
		}
	}

	listHandleByRoomId(id: string): void {
		if (id) {
			this.handleService.getHandleByRoomId(id).subscribe(
				{
					next: (handle: Handles[]): void => {
						this.handleList = handle;
					},
					error: (error: any): void => {
						console.log(error);
					}
				})
		} else {
			this.listAllHandles();
		}
	}

	listHandleByHotelId(id: string): void {
		if (id) {
			this.handleService.getHandleByHotelId(id).subscribe(
				{
					next: (handle: Handles[]): void => {
						this.handleList = handle;
					},
					error: (error: any): void => {
						console.log(error);
					}
				})
		} else {
			this.listAllHandles();
		}
	}
}
