export class Coin {
  constructor(
    public id: number,
    public name: string,
    public baseAsset: string,
    public quoteAsset: string,
    public lastPrice: string,
    public volume24h: string,
    public marketId: string,
    public createdAt: string,
    public updatedAd: string,
    public status: number
  ) {}
}
