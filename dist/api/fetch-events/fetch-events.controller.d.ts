import { FetchEventsService } from "./fetch-events.service";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";
export declare class FetchEventsController {
    private readonly fetchEventsService;
    constructor(fetchEventsService: FetchEventsService);
    getEvents(payload: FetchEventsByTxHashDto): Promise<void>;
}
