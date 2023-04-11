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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchEventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const ethers_1 = require("ethers");
const tokenBook = require("./data/tokenBook.json");
let FetchEventsService = class FetchEventsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.provider = new ethers_1.providers.JsonRpcProvider("http://127.0.0.1:8545");
    }
    async validateTxHash(provider, txHash) {
        const receipt = await provider.getTransactionReceipt(txHash);
        if (!receipt)
            throw new common_1.BadRequestException(`Transaction with hash ${txHash} does not exist.`);
        return receipt;
    }
    async fetchSwapEvent(dto) {
        const { txHash } = dto;
        const receipt = await this.validateTxHash(this.provider, txHash);
        console.log(receipt);
        const swapPath = [];
        const amountPath = [];
        receipt.logs.map((i) => {
            if (tokenBook[i.address.toString()] !== undefined) {
                swapPath.push(tokenBook[i.address]);
                amountPath.push(i.data);
            }
        });
        const timestamp = await this.provider
            .getBlock(receipt.blockNumber)
            .then((block) => {
            return block.timestamp * 1000;
        });
        const return_ = {
            owner: receipt.from,
            txHash: txHash,
            blockNumber: receipt.blockNumber,
            blockHash: receipt.blockHash,
            timestamp: timestamp,
            path: swapPath,
            amountPath: amountPath,
        };
        console.log(return_);
        this.saveSwapEvent(return_);
    }
    async saveSwapEvent(event) {
        const newSwap = await this.prisma.swapEvent.create({
            data: event,
        });
    }
};
FetchEventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FetchEventsService);
exports.FetchEventsService = FetchEventsService;
//# sourceMappingURL=fetch-events.service.js.map