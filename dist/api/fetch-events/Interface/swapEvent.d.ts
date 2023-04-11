export interface SwapEvent {
    owner: string;
    txHash: string;
    blockNumber: number;
    blockHash: string;
    timestamp: number;
    path: string[];
    amountPath: string[];
}
