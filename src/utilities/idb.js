import { openDB, deleteDB, wrap, unwrap } from 'idb'

const initDB = async (database, objectStore) => await openDB(database, 1, {
  upgrade (db) {
    db.createObjectStore(objectStore)
    // objectStore.forEach((objStore) => {
    //   db.createObjectStore(objStore)
    // })
  }
})

const writeDB = async (dbInstance, objectStore, key, value) => {
  return await dbInstance.put(objectStore, value, key)
}

const readDB = async (dbInstance, objectStore, key) => {
  return await dbInstance.get(objectStore, key)
}

export {
  initDB,
  writeDB,
  readDB
}
