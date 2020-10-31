import React, { useState, useEffect } from 'react'
import useIDB from './useIDB.js'

const defaultSetting = {
  database: 'app',
  objectStore: 'mainStorage',
  key: 'hello',
  defaultValue: 'world'
}

const IDB = ({ idbSetting, children }) => {
  const combinedSetting = {
    defaultSetting,
    ...idbSetting
  }

  const [data, setData] = useIDB(combinedSetting)

  return children([data, setData])
}

export default IDB
