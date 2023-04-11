export interface SwapEvent {
  owner: string;
  txHash: string;
  blockNumber: number;
  blockHash: string;
  timestamp: number;
  path: string[]; //A=>B=>C
  amountPath: string[]; // 100=>200=>300
}
