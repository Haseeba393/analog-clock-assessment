import { T_TIMEZONE, T_TIMEZONE_DETAILS } from "./timezone";

export type T_TIMEZONE_LIST_API = {
    "status": string;
    "message": string;
    "zones": T_TIMEZONE[]
}

export type T_TIMEZONE_DETAILS_API = T_TIMEZONE_DETAILS & {
    "status": string;
    "message": string;
}