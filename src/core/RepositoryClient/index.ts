import { Client } from "../Client";

export interface RepositoryClient {
  toSave(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  getAll(): Promise<Client[]>;
}
