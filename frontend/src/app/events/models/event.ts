import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';

/**
 * Event Model object
 */
export class Event {

    _id: string;
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

    creatorEmail: string;


    //The date object holding the event date information
    dateOfEvent: Date;
    maxAttendees: Number;

    /**
     * Attendees array storing all the attendees for this event
     */
    attendees: [];

    isWheelchair: Boolean;
    isPrivate: Boolean;
    
    /**
     * The default hour and minutes
     */
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
