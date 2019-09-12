import {Test} from "./test"

export interface Person {
    name?: string;
    email?: string;
    phone?: string;
    web?: string;
    lastSendTest?: Test;
    tests?: Test[];
};