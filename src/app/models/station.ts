import { ISystemMessages, Message, MessageType } from './sysConfig';
import { IBus, Bus } from './bus';


export enum ISlotStatus {
    EMPTY = 'EMPTY',
    OCCUPIED = 'OCCUPIED'
}
export interface IParkingSlot {
    readonly uuid: number;
    bus: IBus;
    status: ISlotStatus;
}
export interface IStation {
    readonly uuid: number;
    numberOfSlots: number;
    hasEmptySlot: boolean;
}


export class Station implements IStation {
    readonly uuid: number;
    numberOfSlots: number;
    hasEmptySlot: boolean;
    busList: IBus[] = [];
    constructor(uuid: number, numberOfSlots: number) {
        this.uuid = uuid;
        this.numberOfSlots = numberOfSlots;
        this.hasEmptySlot = this.getFreeSlots() === 0;
    }

    getFreeSlots(): number {
        if (this.numberOfSlots - this.busList.length <= 0) {
            this.hasEmptySlot = false;
        }
        return this.numberOfSlots - this.busList.length;
    }

    setSlotsNumber(numberOfSlots: number): ISystemMessages {
        if (this.numberOfSlots > this.busList.length) {
            return {
                message: Message.STATION_UPDATE_SLOTS_NUMBER_ERROR,
                messageType: MessageType.ERROR
            };
        }
        this.numberOfSlots = numberOfSlots;
        return {
            message: Message.STATION_UPDATE_SLOTS_NUMBER_SUCCESS,
            messageType: MessageType.SUCCESS
        };
    }
    updateStationBusesList(busList: Bus[]) {
        this.busList = [...busList];
    }
}

export class StationList {
    stationList: Station[];
    constructor(stationList: Station[] = []) {
        this.stationList = stationList.map((station) => new Station(station.uuid, station.numberOfSlots));
    }

    // return next Station uuid to accept new station
    getNextStationUUID(): number {
        if (this.stationList.length === 0) {
            return 1;
        }
        return this.stationList[this.stationList.length - 1].uuid + 1;
    }

    /**
     *
     * @param newStation IStation
     * check the new station uuid already exists.
     * returns ISystemMessages object (success or error).
     */
    addNewStation(numberOfSlots: number): ISystemMessages {
        this.stationList.push(new Station(
            this.getNextStationUUID(),
            numberOfSlots
        ));
        return {
            message: Message.STATION_ADD_SUCCESS,
            messageType: MessageType.SUCCESS
        };
    }
}
