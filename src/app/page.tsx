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
  ]

  return (
    <div className="
      flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-700 text-white
    ">
      <Layout title="Cadastro">
        <Table client={client}></Table>
      </Layout>
    </div>
  )
}
