"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchEventsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const prisma_service_1 = require("../../prisma/prisma.service");
const fetch_events_controller_1 = require("./fetch-events.controller");
const fetch_events_service_1 = require("./fetch-events.service");
let FetchEventsModule = class FetchEventsModule {
};
FetchEventsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [fetch_events_controller_1.FetchEventsController],
        providers: [fetch_events_service_1.FetchEventsService, prisma_service_1.PrismaService],
    })
], FetchEventsModule);
exports.FetchEventsModule = FetchEventsModule;
//# sourceMappingURL=fetch-events.module.js.map