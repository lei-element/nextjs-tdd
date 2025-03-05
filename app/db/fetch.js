import { openDb } from "./connect";

export async function fetch() {
    const db = await openDb();
  
    const posts = await db.all('SELECT * FROM posts');

    await db.close();

    return posts;
}