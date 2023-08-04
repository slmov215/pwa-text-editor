import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// The logic to this method accepts some content and adds it to the database
export const putDb = async (content) => {
  
  const textDB = await openDB('jate', 1);

  const tx = textDB.transaction('jate', 'readwrite');

  const store = tx.objectStore('jate');

  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log(' Data saved to database', result);
};
// console.error('putDb not implemented');

// The logic to this method gets the content from the database
export const getDb = async () => {
  const textDB = await openDB('jate', 1);

  const tx = textDB.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.get(1);

  const result = await request;
  console.log('result.value', result);
  return result?.value;
};
// console.error('getDb not implemented');

initdb();
