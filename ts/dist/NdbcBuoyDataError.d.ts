import { Context } from './Context';
declare class NdbcBuoyDataError extends Error {
    isNdbcBuoyDataError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { NdbcBuoyDataError };
