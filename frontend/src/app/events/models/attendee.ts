/**
 * Attendee Model object
 */
export class Attendee {

    id: Number;
    name: string;
    email: string;

    constructor(name: string,email: string) {    
        this.name = name;
        this.email = email;
    }
}
