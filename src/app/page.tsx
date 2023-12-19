'use client'

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { useClient } from "@/hooks/useClient";

export default function Home() {
  const {
    client,
    customers,
    clientSelected,
    clientDeleted,
    newClient,
    saveCustomer,
    visibleTable,
    displayTable
  } = useClient();

  return (
    <div className="
      flex justify-center items-center h-screen bg-gradient-to-r from-teal-600 to-teal-800 text-white
    ">
      <Layout title="CRUD - FIREBASE">
        {visibleTable ? (
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
            canceled={displayTable}
          />
        )}
      </Layout>
    </div>
  )
}