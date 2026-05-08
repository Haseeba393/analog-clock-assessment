export const calculateClockHandAngle = (type: "hour" | "minute" | "second", hours: number, minutes: number, seconds: number) => {
    switch (type) {
        case "second":
            return seconds * 6;
        case "minute":
            return minutes * 6 + seconds * 0.1;
        case "hour":
            return (hours % 12) * 30 + minutes * 0.5;
    }
}