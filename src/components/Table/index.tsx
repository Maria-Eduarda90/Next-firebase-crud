import { Client } from "@/core/Client";
import { IconEdit } from "../Icons/Edit";
import { IconTrash } from "../Icons/Trash";

export interface TableProps {
    client: Client[];
}

export function Table({ client }: TableProps) {

    function renderData() {
        return client?.map((client, i) => {
            return (
                <tr key={client.getId} className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.getId}</td>
                    <td className="text-left p-4">{client.getName}</td>
                    <td className="text-left p-4">{client.getAge}</td>
                    {renderIcon(client)}
                </tr>
            );
        })
    }

    function renderIcon(clint: Client) {
        return (
            <td>
                <button>{IconEdit}</button>
                <button>{IconTrash}</button>
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    <th className="p-4">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}