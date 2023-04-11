import { PrismaService } from "src/prisma/prisma.service";
import { ethers, providers } from "ethers";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";
import { SwapEvent } from "./Interface/swapEvent";
export declare class FetchEventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    provider: ethers.providers.JsonRpcProvider;
    validateTxHash(provider: providers.JsonRpcProvider, txHash: string): Promise<providers.TransactionReceipt>;
    fetchSwapEvent(dto: FetchEventsByTxHashDto): Promise<void>;
    saveSwapEvent(event: SwapEvent): Promise<void>;
}
