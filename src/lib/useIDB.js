import React, { useState, useEffect } from 'react'
import {
  initDB,
  writeDB,
  readDB
} from '../utilities/idb.js'
import {
  isNil,
  defaultWhenEmpty
} from '@blackblock/common-utilities'

const useIDB = ({
  database,
  objectStore,
  key,
  defaultValue
}) => {
  const [appDatabase, setAppDatabase] = useState(undefined)
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const asyncFn = async () => {
      const dbInstance = await initDB(database, objectStore)
      const savedData = await readDB(dbInstance, objectStore, key)
      await setAppDatabase(dbInstance)
      // Wait until data is saved
      await setData(savedData)
    }

    asyncFn()
  }, [])

  // Write IDB if data change
  useEffect(() => {
    if (isNil(appDatabase)) return
    writeDB(appDatabase, objectStore, key, data)
  }, [appDatabase, objectStore, key, data])

  return [data, setData]
}

export default useIDB
