import { Client } from "@/core/Client";
import { IconEdit } from "../Icons/Edit";
import { IconTrash } from "../Icons/Trash";

export interface TableProps {
    client: Client[];
    clientSelected?: (client: Client) => void;
    clientDeleted?: (client: Client) => void;
}

export function Table({ client, clientSelected, clientDeleted }: TableProps) {

    const displayActions = clientSelected || clientDeleted;

    function renderData() {
        return client?.map((client, i) => {
            return (
                <tr key={client.getId} className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.getId}</td>
                    <td className="text-left p-4">{client.getName}</td>
                    <td className="text-left p-4">{client.getAge}</td>
                    {displayActions ? renderIcon(client) : false}
                </tr>
            );
        })
    }

    function renderIcon(client: Client) {
        return (
            <td className="flex justify-center">
                {clientSelected ? (
                    <button
                        onClick={() => clientSelected?.(client)}
                        className="flex justify-center items-center text-green-600 p-2 m-1"
                    >
                        {IconEdit}
                    </button>
                ) : false}

                {clientDeleted ? (
                    <button
                        onClick={() => clientDeleted?.(client)}
                        className="flex justify-center items-center text-red-500 p-2 m-1"
                    >
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100 bg-gradient-to-r from-teal-600 to-teal-800">
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    {displayActions ? <th className="p-4">Ações</th> : false}
                </tr>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}