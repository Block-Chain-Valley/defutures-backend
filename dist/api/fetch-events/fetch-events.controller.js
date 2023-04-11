"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchEventsController = void 0;
const common_1 = require("@nestjs/common");
const fetch_events_service_1 = require("./fetch-events.service");
const fetchEventsByTxHash_dto_1 = require("./dto/fetchEventsByTxHash.dto");
let FetchEventsController = class FetchEventsController {
    constructor(fetchEventsService) {
        this.fetchEventsService = fetchEventsService;
    }
    async getEvents(payload) {
        return this.fetchEventsService.fetchSwapEvent(payload);
    }
};
__decorate([
    (0, common_1.Post)("swap"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [fetchEventsByTxHash_dto_1.FetchEventsByTxHashDto]),
    __metadata("design:returntype", Promise)
], FetchEventsController.prototype, "getEvents", null);
FetchEventsController = __decorate([
    (0, common_1.Controller)("fetch-events"),
    __metadata("design:paramtypes", [fetch_events_service_1.FetchEventsService])
], FetchEventsController);
exports.FetchEventsController = FetchEventsController;
//# sourceMappingURL=fetch-events.controller.js.map