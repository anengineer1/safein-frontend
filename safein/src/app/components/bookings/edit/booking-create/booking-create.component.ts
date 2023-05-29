import { Component } from '@angular/core';
import { BookingData } from 'src/app/entityclasses/booking-data';
import { City } from 'src/app/entityclasses/city';
import { Handles } from 'src/app/entityclasses/handles';
import { BookingsService } from '../../../../_services/bookings.service';
import { HandlesService } from 'src/app/_services/handles.service';
import { Customer } from 'src/app/entityclasses/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Room } from 'src/app/entityclasses/room';
import { RoomsService } from 'src/app/_services/rooms.service';
import { Country } from 'src/app/entityclasses/country';
import { CitiesService } from 'src/app/services/cities.service';
import { CountriesService } from '../../../../services/countries.service';
import { Hotel } from 'src/app/entityclasses/hotel';
import { HotelsService } from 'src/app/_services/hotels.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { Suser } from 'src/app/entityclasses/suser';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss']
})
export class BookingCreateComponent {


  //Attributes
  user: any = [];
  //current booking and handle  to create
  booking: BookingData = new BookingData();
  handle: Handles = new Handles();
  bookingsList: BookingData[] = [];
  handlesList : Handles[] = [];

  //Selects
  customer: Customer = new Customer();
  customersList: Customer[] = [];
  room: Room = new Room();
  roomList: Room[] = [];
  city: City = new City();
  cityList: City[] = [];
  country: Country = new Country();
  countriesList: Country[] = [];
  hotel: Hotel = new Hotel();
  hotelsList: Hotel[] = [];

  //constructor
  constructor(private tss: TokenStorageService,private bookingService: BookingsService, private handleService: HandlesService, private customersService:CustomersService, private roomsService:RoomsService, private citiesService: CitiesService, private countriesService:CountriesService, private hotelsService:HotelsService, private userService:UserService) {}

  ngOnInit(): void {

    //SIGNIN
		this.user = this.tss.getUser();
    console.log(this.user);

    this.getAllBookings();
    this.getAllHandles();
    //For selects
    this.getAllCustomers();
    this.getAllRooms();
    this.getAllCities();
    this.getAllCountries();
    this.getAllHotels();
  }

//Get All Bookings
getAllBookings(){
  this.bookingService.listAllBookingDatas().subscribe(
    (bookingService: BookingData[]):void => {
      this.bookingsList = bookingService;
      //console.log(this.bookingsList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Handles
getAllHandles(){
  this.handleService.listAllHandles().subscribe(
    (handleService: Handles[]):void => {
      this.handlesList = handleService;
       //console.log(this.handlesList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Customers
getAllCustomers(){
  this.customersService.listAllCustomers().subscribe(
    (customersService: Customer[]):void => {
      this.customersList = customersService;
       //console.log(this.customersList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Rooms
getAllRooms(){
  this.roomsService.listAllRooms().subscribe(
    (roomsService: Room[]):void => {
      this.roomList = roomsService;
       //console.log(this.roomList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Cities
getAllCities(){
  this.citiesService.listAllCites().subscribe(
    (citiesService: City[]):void => {
      this.cityList = citiesService;
       //console.log(this.cityList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Countries
getAllCountries(){
  this.countriesService.listAllCountries().subscribe(
    (countriesService: Country[]):void => {
      this.countriesList = countriesService;
       //console.log(this.countriesList);
    },
     (error:any):void => {console.log(error);}
  )
}

//Get All Hotels
getAllHotels(){
  this.hotelsService.listAllHotels().subscribe(
    (hotelsService: Hotel[]):void => {
      this.hotelsList = hotelsService;
       //console.log(this.hotelsList);
    },
     (error:any):void => {console.log(error);}
  )
}

/* Create a new Booking */
saveBooking(){

  this.booking.customers.id = this.customer.id;
  this.booking.suser.id = this.user.userId;

  this.bookingService.createBooking(this.booking).subscribe(
    response => {
    
      console.log(response);
      alert('Booking : '+ this.booking +'registered successfully');
      this.ngOnInit();
       //console.log(response);
    }),
  (error:any):void => {
     console.log(error);
  }
}

/* Create a new Handle */
saveHandle(){

  this.handle.room = this.room;
  //this.handle.arrivalDate = this.handle.arrivalDate.getDate();
  console.log(this.handle);

  this.handleService.createHandle(this.handle).subscribe(
    response => {
     
      alert('Handle :'+ this.handle +'registered successfully');
      this.ngOnInit();
      console.log(response);
    }),
  (error:any):void => {
    console.log(error);
  }
}

}
