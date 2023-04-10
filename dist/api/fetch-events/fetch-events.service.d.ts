import { PrismaService } from "src/prisma/prisma.service";
import { ethers } from "ethers";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";
export declare class FetchEventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    provider: ethers.JsonRpcProvider;
    validateTxHash(provider: ethers.JsonRpcProvider, txHash: string): Promise<ethers.TransactionReceipt>;
    fetchEventsByTxHash(dto: FetchEventsByTxHashDto): Promise<void>;
}
