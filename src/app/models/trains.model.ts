export interface Trains{
    trainId: number;
    trainName: string;
    source: string;
    destination: string;
    departureTime: Date;
    arrivalTime: Date;
    availableSeats: number;
    price: number;
}