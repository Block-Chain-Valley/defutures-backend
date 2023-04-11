import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { FetchEventsService } from "./fetch-events.service";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";

@Controller("fetch-events")
export class FetchEventsController {
  constructor(private readonly fetchEventsService: FetchEventsService) {}

  @Post("swap")
  async getEvents(@Body() payload: FetchEventsByTxHashDto) {
    // console.log(payload);
    return this.fetchEventsService.fetchExchangeEvent(payload);
  }
}
