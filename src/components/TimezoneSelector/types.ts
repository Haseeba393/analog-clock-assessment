import { T_TIMEZONE } from "../../types/timezone";

export type T_TIMEZONE_SELECTOR_PROPS = {
    timezones: T_TIMEZONE[];
    onTimezoneSelect: (timezone: T_TIMEZONE) => void;
}