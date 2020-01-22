export enum SlotStatus {
    EMPTY = 'EMPTY',
    OCCUPIED = 'OCCUPIED'
}
export interface ParkingSlot {
    uuid: number,
    status: SlotStatus
}
export interface Station {
    uuid: number,
    parkingSlots: ParkingSlot[]
}