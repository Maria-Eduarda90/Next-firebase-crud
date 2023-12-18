import { Client } from "@/core/Client";
import { RepositoryClient } from "@/core/RepositoryClient";
import firebase from "firebase/compat/app";

export class CollectionClient implements RepositoryClient {
  #conversor = {
    toFirestore(client: Client) {
      return {
        name: client.getName,
        age: client.getAge,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Client {
      const data = snapshot.data(options);
      return new Client(data.getName, data.getAge, snapshot.id);
    },
  };

  async toSave(client: Client): Promise<Client> {
    if (client?.getId) {
      await this.collection().doc(client.getId).set(client);
      return client;
    } else {
      const docRef = await this.collection().add(client);
      const doc = await docRef.get();
      return doc.data()!;
    }
  }

  async delete(client: Client): Promise<void> {
    return this.collection().doc(client.getId).delete();
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collection().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private collection() {
    return firebase
      .firestore()
      .collection("clientes")
      .withConverter(this.#conversor);
  }
}
