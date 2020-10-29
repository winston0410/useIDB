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
  const [data, setData] = useState(async () => {
    const dbInstance = await initDB(database, objectStore)
    const savedData = await readDB(dbInstance, objectStore, key)

    setAppDatabase(dbInstance)

    return defaultWhenEmpty(defaultValue)(savedData)
  })

  // Write IDB if data change
  useEffect(() => {
    // console.log(appDatabase, key, data)
    // console.log('3rd running', appDatabase)
    // console.log('data', data)
    if (isNil(appDatabase)) return
    writeDB(appDatabase, objectStore, key, data)
    // setData(defaultValue)
  }, [key, data])

  return [data, setData]
}

export default useIDB
