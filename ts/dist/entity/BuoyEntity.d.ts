import { NdbcBuoyDataEntityBase } from '../NdbcBuoyDataEntityBase';
import type { NdbcBuoyDataSDK } from '../NdbcBuoyDataSDK';
import type { Control } from '../types';
import type { Buoy, BuoyLoadMatch, BuoyListMatch } from '../NdbcBuoyDataTypes';
declare class BuoyEntity extends NdbcBuoyDataEntityBase<Buoy> {
    constructor(client: NdbcBuoyDataSDK, entopts: any);
    make(this: BuoyEntity): BuoyEntity;
    load(this: any, reqmatch?: BuoyLoadMatch, ctrl?: Control): Promise<BuoyEntity>;
    list(this: any, reqmatch?: BuoyListMatch, ctrl?: Control): Promise<BuoyEntity[]>;
}
export { BuoyEntity };
