import { ISystemMessages, Message, MessageType } from './sysConfig';

export enum BusType {
    Regular = 'Regular',
    DoubleDecker = 'DoubleDecker',
    MiniBus = 'MiniBus',
    HybridBus = 'HybridBus'
}

export interface IBus {
    plate: string;
    busType: BusType;
    station: number;
}

export class Bus implements IBus {
    plate: string;
    busType: BusType;
    station: number;

    constructor(plate: string, busType: BusType, station: number) {
        this.plate = plate;
        this.busType = busType;
        this.station = station;
    }
}

export class BusList {
    busList: Bus[];
    constructor(busList: Bus[] = []) {
        this.busList = busList;
    }
    addBus(plateNumber: string, busType: BusType, stationId: number): ISystemMessages {
        const isBusExists = this.busList.find((bus) => bus.plate === plateNumber);
        if (isBusExists) {
            return {
                message: Message.BUS_EXISTS_ERROR,
                messageType: MessageType.ERROR
            };
        }
        this.busList.push(new Bus(plateNumber, busType, stationId));
        return {
            message: Message.BUS_ADD_SUCCESS,
            messageType: MessageType.SUCCESS
        };
    }

    getBusByStationID(stationId: number): Bus[] {
        return this.busList.filter((bus) => bus.station === stationId);
    }
}

