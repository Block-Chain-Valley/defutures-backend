import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ethers, providers } from "ethers";
import { FetchEventsByTxHashDto } from "./dto/fetchEventsByTxHash.dto";
import * as event_signatures from "./data/event_signatures.json";

import * as transferBook from "./data/transferBook.json";
import * as swapBook from "./data/swapBook.json";

import { SwapEvent } from "./Interface/swapEvent";
@Injectable()
export class FetchEventsService {
  constructor(private readonly prisma: PrismaService) {}
  provider = new providers.JsonRpcProvider("http://127.0.0.1:8545");

  async validateTxHash(
    provider: providers.JsonRpcProvider,
    txHash: string
  ): Promise<providers.TransactionReceipt> {
    const receipt = await provider.getTransactionReceipt(txHash);
    if (!receipt)
      throw new BadRequestException(
        `Transaction with hash ${txHash} does not exist.`
      );

    return receipt;
  }

  async fetchExchangeEvent(dto: FetchEventsByTxHashDto) {
    const { txHash } = dto;
    const receipt = await this.validateTxHash(this.provider, txHash);
    const timestamp = await this.provider
      .getBlock(receipt.blockNumber)
      .then((block) => {
        return block.timestamp * 1000;
      });
    console.log(receipt);
    const swaps = [];
    const transfers = [];

    receipt.logs.map((i) => {
      if (swapBook[i.address] !== undefined) {
        swaps.push(i);
      }
      else if (transferBook[i.address] !== undefined){
        transfers.push(i);
      }
    })
    
    receipt.logs.map((i) => {
      console.log(i);
      if (swapBook[i.address] !== undefined) {
        // add swap events
        ///TODO Transfer Event들을 따로 저장? else if (transferBook[i.address] !== undefined) {
        //   // add transfer Events
        // }
        const swapEvent = {
          createdAt: timestamp,
          account: receipt.from,
          logIndex: i.logIndex,
          txHash: txHash,
          blockNumber: receipt.blockNumber,
          verified: true,
          fromTokenId: {
            connect: {
              address: i.topics[1],
            }
          }
          toTokenId:
          fromAmount: i.data.slice(2+32, 2+32+32),
          toAmount: i.data.slice(2+64, 2+64+32),
          pairId: 
          exchangeId:
          
        }
      }
    });

    const return_ = {};
  }

  // async saveSwapEvent(event: SwapEvent) {
  //   const newSwap = await this.prisma.swap.create({
  //     data: event,
  //   });
  // }
}
