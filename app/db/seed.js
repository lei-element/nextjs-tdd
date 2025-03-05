import { openDb } from './connect';

export async function setup() {
    const db = await openDb()
  
    await db.exec(`
      CREATE TABLE posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        title TEXT,
        content TEXT  
      );
    `)
  
    await db.run(
      'INSERT INTO posts (title, content) VALUES (?, ?)',
      'Hello World', 
      'My first blog post!'
    )

    await db.close()  
}