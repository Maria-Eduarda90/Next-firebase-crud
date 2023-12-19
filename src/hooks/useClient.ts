import { Client } from "@/core/Client";
import { RepositoryClient } from "@/core/RepositoryClient";
import { CollectionClient } from "@/firebase/db/CollectionClient";
import { useEffect, useState } from "react";
import { useVisible } from "./useVisible";

export function useClient(): {
  client: Client;
  customers: Client[];
  clientSelected: (client: Client) => void;
  clientDeleted: (client: Client) => Promise<void>;
  newClient: () => void;
  saveCustomer: (client: Client) => Promise<void>;
  visibleTable: boolean;
  visibleForm: boolean;
  displayTable: () => void;
} {
  const repo: RepositoryClient = new CollectionClient();

  const [client, setClient] = useState<Client>(Client.empty);
  const [customers, setCustomers] = useState<Client[]>([]);
  const { displayForm, displayTable, visibleForm, visibleTable } = useVisible();

  useEffect(getAllCustomer, []);

  function getAllCustomer() {
    repo.getAll().then((customers) => {
      setCustomers(customers);
      displayTable();
    });
  }

  function clientSelected(client: Client) {
    setClient(client);
    displayForm();
  }

  async function clientDeleted(client: Client) {
    await repo.delete(client);
    getAllCustomer();
  }

  function newClient() {
    setClient(Client.empty());
    displayForm();
  }

  async function saveCustomer(client: Client) {
    await repo.toSave(client);
    getAllCustomer();
  }

  return {
    client,
    customers,
    clientSelected,
    clientDeleted,
    newClient,
    saveCustomer,
    visibleTable,
    visibleForm,
    displayTable,
  };
}
