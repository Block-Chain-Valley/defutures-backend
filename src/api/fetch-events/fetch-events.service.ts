import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ethers } from "ethers";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";
@Injectable()
export class FetchEventsService {
  constructor(private readonly prisma: PrismaService) {}
  provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  async validateTxHash(
    provider: ethers.JsonRpcProvider,
    txHash: string
  ): Promise<ethers.TransactionReceipt> {
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt)
      throw new BadRequestException(
        `Transaction with hash ${txHash} does not exist.`
      );
    return receipt;
  }

  async fetchEventsByTxHash(dto: FetchEventsByTxHashDto) {
    const { txHash } = dto;
    const receipt = await this.validateTxHash(this.provider, txHash);
    console.log(typeof receipt);
    // console.log(typeof receipt);
    console.log(1);
  }
}
