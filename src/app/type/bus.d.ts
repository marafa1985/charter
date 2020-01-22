export enum BusType {
    Regular = 'Regular',
    DoubleDecker = 'DoubleDecker',
    MiniBus = 'MiniBus',
    HybridBus = 'HybridBus'
}

export interface Bus {
    plate: string
    busType: BusType
}