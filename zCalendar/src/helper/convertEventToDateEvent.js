import { parseISO } from "date-fns";


export const convertEventToDateEvent = (event = []) => {

    return event.map(event =>{
        
        event.start = parseISO(event.start);
        event.end = parseISO(event.end);

        return event;
    });
}