import { Client } from "@/core/Client";

export interface TableProps {
    client: Client[];
}

export function Table({ client }: TableProps) {

    function renderData() {
        return client?.map((client, i) => {
            return (
                <tr key={client.getId}>
                    <td>{client.getId}</td>
                    <td>{client.getName}</td>
                    <td>{client.getAge}</td>
                </tr>
            );
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
                <tbody>
                    {renderData()}
                </tbody>
            </thead>
        </table>
    )
}