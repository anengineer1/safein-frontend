import { Component, OnInit } from '@angular/core';
import { BookingData } from 'src/app/entityclasses/booking-data';
import { BookingsService } from '../../../../_services/bookings.service';
import { Handles } from 'src/app/entityclasses/handles';
import { HandlesService } from '../../../../_services/handles.service';
import { Customer } from 'src/app/entityclasses/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-booking-delete',
  templateUrl: './booking-delete.component.html',
  styleUrls: ['./booking-delete.component.scss']
})

/**Class to manage the delete of Bookings( no handles ) */

export class BookingDeleteComponent implements OnInit {

  //Atributes
  booking: BookingData = new BookingData();
  bookingsList: BookingData[] = [];

  //selects
  handle: Handles = new Handles();
  handlesList : Handles[] = [];
  customer: Customer = new Customer();
  customersList: Customer[] = [];
  
  //Constructor
  constructor(private bookingService: BookingsService, private handlesService: HandlesService, private customerService:CustomersService) { };

  ngOnInit(): void {
      this.getAllBookings();
      this.getAllHandles();
      this.getAllCustomers();
  }

  //Get All Bookings
  getAllBookings() {
    this.bookingService.listAllBookingDatas().subscribe(
      (bookingService: BookingData[]): void => {
        this.bookingsList = bookingService;
        console.log(this.bookingsList);
      },
      (error: any): void => { console.log(error); }
    )
  }

//Get All Handles
getAllHandles(){
  this.handlesService.listAllHandles().subscribe(
    (handleService: Handles[]):void => {
      this.handlesList = handleService;
      console.log(this.handlesList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Customers
getAllCustomers(){
  this.customerService.listAllCustomers().subscribe(
    (customersService: Customer[]):void => {
      this.customersList = customersService;
      console.log(this.customersList);
    },
     (error:any):void => {console.log(error);}
  )
}

  //Delete Booking: not implemented in backend/not necessary
  deleteBooking():void{
  this.bookingService.deleteBooking(this.booking, this.booking.id).subscribe(
    response => {
      console.log(response);
      alert('Booking deleted successfully');
    },
    (error: any): void => { console.log(error); }
  );
  }

  //Delete Handle
  deleteHandle():void{
    this.handlesService.deleteHandle(this.handle, this.handle.id).subscribe(
      response => {
        console.log(response);
        alert('Booking deleted successfully');
      },
      (error: any): void => { console.log(error); }
    );
    }

}
