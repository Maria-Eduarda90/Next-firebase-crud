'use client'

import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { Client } from "@/core/Client";

export default function Home() {

  const client = [
    new Client('Ane', 17, '1'),
    new Client('Ian', 20, '2'),
    new Client('Carla', 30, '3'),
    new Client('Gustavo', 18, '4'),
    new Client('Paulo', 24, '5')
  ];

  function clientSelected(client: Client) {
    console.log('editado: ', client.getName)
  };

  function clientDeleted(client: Client) {
    console.log('excluido: ', client.getName)
  }

  return (
    <div className="
      flex justify-center items-center h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white
    ">
      <Layout title="CRUD - FIREBASE">
        <Table
          client={client}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted}
        ></Table>
      </Layout>
    </div>
  )
}
