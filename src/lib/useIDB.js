import React, { useState, useEffect } from 'react'
import {
  initDB,
  writeDB,
  readDB
} from '../utilities/idb.js'
import {
  isNil
} from '@blackblock/common-utilities'

const useIDB = ({
  database,
  objectStore,
  key,
  defaultValue
}) => {
  const [appDatabase, setAppDatabase] = useState(undefined)
  const [data, setData] = useState(defaultValue)

  // Open IDB and Object store
  useEffect(() => {
    const asyncFn = async () => {
      const dbInstance = await initDB(database, objectStore)
      setAppDatabase(dbInstance)
      console.log('running async', dbInstance)
    }

    asyncFn()
  }, [])

  // Write IDB if data change
  useEffect(() => {
    // console.log(appDatabase, key, data)
    // console.log('3rd running', appDatabase)
    // console.log('data', data)
    if (isNil(appDatabase)) return
    console.log('write to db')
    writeDB(appDatabase, objectStore, key, data)
    // setData(defaultValue)
  }, [key, data])

  return [data, setData]
}

export default useIDB
