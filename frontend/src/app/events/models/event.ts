import { LatLng } from 'ngx-google-places-autocomplete/objects/latLng';

/**
 * Event Model object
 */
export class Event {

    //Id used to add into the attendee
    _id: string;

    //name of the event
    name: string;

    //cause of the event
    cause: string;

    //venue of the event passed by google maps api
    venue: string;

    //lat provided by google maps api
    lat: Number;

    //lng provided by google maps api
    lng: Number;

    //description of the event
    description: string;

    //status of the event
    status: string;

    //email id of the creator
    creatorEmailId: string;

    // of the creator
    hostName: string;

    //The date object holding the event date information
    dateOfEvent: Date;

    //max number of attendees for this event
    maxAttendees: Number;
    
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
