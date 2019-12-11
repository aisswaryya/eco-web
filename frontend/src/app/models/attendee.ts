/**
 * Attendee Model object
 */
export class Attendee {

    //Id of the attendee
    id: string;

    /**
     * The event id which the attendee will be attending
     */
    eventId: string;

    /**
     * The email id of the attendee
     */
    emailId: string;

    /**
     * The name of the attendee
     */
    eventName: string;

    //The date object holding the event date information
    dateOfEvent: Date;

    constructor(eventId : string, eventName : string,emailId : string,dateOfEvent : Date) {    
        this.eventId = eventId;
        this.eventName = eventName;
        this.emailId = emailId;
        this.dateOfEvent = dateOfEvent;
    }
}
