export class CityCoordinates {
    city: string;
    latitude: number;
    longitude: number;
    constructor(city: string, latitude: number, longitude: number) {
        this.city = city;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}