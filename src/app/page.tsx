'use client'

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Client } from "@/core/Client";
import { useVisible } from "@/hook/useVisible";
import { useState } from "react";

export default function Home() {
  const [client, setClient] = useState<Client>(Client.empty);
  const { visible, setVisible } = useVisible();

  const customers = [
    new Client('Ane', 17, '1'),
    new Client('Ian', 20, '2'),
    new Client('Carla', 30, '3'),
    new Client('Gustavo', 18, '4'),
    new Client('Paulo', 24, '5')
  ];

  function clientSelected(client: Client) {
    setClient(client);
    setVisible('form');
  };

  function clientDeleted(client: Client) {
    console.log('excluido: ', client.getName)
  }

  function saveCustomer(client: Client) {
    console.log('salvo: ', client);
    setVisible('table')
  }

  function newClient() {
    setClient(Client.empty());
    setVisible('form')
  }

  return (
    <div className="
      flex justify-center items-center h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white
    ">
      <Layout title="CRUD - FIREBASE">
        {visible === 'table' ? (
          <div>
            <div className="flex justify-end">
              <Button
                color="teal"
                className="mb-4"
                onClick={newClient}
              >
                Novo cliente
              </Button>
            </div>
            <Table
              client={customers}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            ></Table>
          </div>
        ) : (
          <Form
            client={client}
            customerChanged={saveCustomer}
            canceled={() => setVisible('table')}
          />
        )}
      </Layout>
    </div>
  )
}