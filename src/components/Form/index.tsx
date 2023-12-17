import { Client } from "@/core/Client";
import { Input } from "../Input";
import { useState } from "react";
import { Button } from "../Button";

export interface IFormProps {
    client: Client;
    customerChanged?: (client: Client) => void;
    canceled?: () => void;
}

export function Form({ client, canceled, customerChanged }: IFormProps) {
    const id = client?.getId;
    const [name, setName] = useState(client.getName ?? '');
    const [age, setAge] = useState(client.getAge ?? 0);

    return (
        <div>
            {id ? (
                <Input
                    className="mb-4"
                    onlyReading
                    text="Código"
                    value={id}
                />
            ) : false}
            <Input
                className="mb-4"
                text="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Input
                text="Idade"
                type="number"
                value={age}
                onChange={e => setAge(Number(e.target.value))}
            />
            <div className="flex justify-end mt-6">
                <Button color="blue" className="mr-2" onClick={() => customerChanged?.(new Client(name, age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={canceled}>
                    Cancelar
                </Button>
            </div>
        </div>
    );
}