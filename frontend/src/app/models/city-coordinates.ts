export class CityCoordinates {
    cityName: string;
    latitude: number;
    longitude: number;
    constructor(cityName: string, latitude: number, longitude: number) {
        this.cityName = cityName;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}