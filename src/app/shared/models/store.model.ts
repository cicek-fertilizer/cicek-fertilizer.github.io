export class Store {
  constructor(
    public storeId?: number,
    public storeName?: string,
    public latitude?: number,
    public longitude?: number,
    public city?: string,
    public district?: string
  ) {}
}
