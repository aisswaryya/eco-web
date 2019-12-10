/**
 * Attendee Model object
 */
export class Attendee {

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
    name: string;

    constructor(eventId:string, name: string,emailId: string) {    
        this.eventId = eventId;
        this.name = name;
        this.emailId = emailId;
    }
}
