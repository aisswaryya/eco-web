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

    /**
     * Am i attending this event
     * boolean to display if i am attending
     */
    amIAttending : boolean = false;
}
