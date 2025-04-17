// indexed db

// interface for document
interface Message {
  id: string;
  content: string;
  createdAt: number;
}

// db name and store name

export class MessageStore {
  private DB_NAME: string;
  private STORE_NAME: string;
  private VERSION: number;
  constructor({
    dbName,
    storeName,
    version,
  }: {
    dbName: string;
    storeName: string;
    version: number;
  }) {
    this.DB_NAME = dbName;
    this.STORE_NAME = storeName;
    this.VERSION = version;
  }

  async initialize({}) {
    return new Promise();
  }
}
