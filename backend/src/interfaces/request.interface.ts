import { Request } from "express";
import IPayload from './payload.interface';

export  interface AuthRequest extends Request {
    user: string | IPayload;
}