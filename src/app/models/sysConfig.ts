export enum MessageType {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}
export enum Message {
    STATION_ADD_SUCCESS = 'New station added successfully',
    STATION_ADD_ERROR = 'The station already exists',
    STATION_UPDATE_SLOTS_NUMBER_SUCCESS = 'Number of slots, updated successfully',
    STATION_UPDATE_SLOTS_NUMBER_ERROR = 'Can not update station slots, the station contains buses more than the number of slots',
    BUS_ADD_SUCCESS = 'New bus added successfully',
    BUS_EXISTS_ERROR = 'The Bus already exists'
}

export interface ISystemMessages {
    message: Message;
    messageType: MessageType;
}
