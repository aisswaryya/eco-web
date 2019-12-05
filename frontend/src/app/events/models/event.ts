import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';

/**
 * Event object
 */
export class Event {

    id: Number;
    name: string;
    cause: string;
    venue: string;
    lat: Number;
    lng: Number;
    city: string;
    state: string;
    country: string;
    zip: string;
    description: string;
    status: string;

    hostName: string;


    //The date object holding the event date information
    dateOfEvent: Date;
    maxAttendees: Number;
    isWheelchair: Boolean;
    isPrivate: Boolean;
    creator: string;
    
    time = {hour: 12, minute: 0};

    // constructor(
    //     name: string,
    //     cause: string,
    //     venue: string,
    //     city: string,
    //     state: string,
    //     country: string,
    //     zip: string,
    //     description: string,
    //     status: string,
    //     dateOfEvent: Date,
    //     maxAttendees: Number,
    //     isWheelchair: Boolean,
    //     isPrivate: Boolean,
    //     creator: string
    //     ) {
            
    //         this.name = name;
    //         this.cause = cause;
    //         this.venue = venue;
    //         this.city = city;
    //         this.state = state;
    //         this.country = country;
    //         this.zip = zip;
    //         this.description = description;
    //         this.status = status;
    //         this.dateOfEvent = dateOfEvent;
    //         this.maxAttendees = maxAttendees;
    //         this.isWheelchair = isWheelchair;
    //         this.isPrivate = isPrivate;
    //         this.creator = creator;
    // }
}
