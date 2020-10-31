# UseIDB

[![Maintainability](https://api.codeclimate.com/v1/badges/36e11a8c05223785b11a/maintainability)](https://codeclimate.com/github/winston0410/useIDB/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/36e11a8c05223785b11a/test_coverage)](https://codeclimate.com/github/winston0410/useIDB/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/useIDB/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/useIDB?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/45b90ef721bf4aab8b252ae3c41b8c1f)](https://www.codacy.com/gh/winston0410/useIDB/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/useIDB&utm_campaign=Badge_Grade)

A package that helps you read and write data to IndexedDB easily in React. A React hook and render-prop component provided.

This package uses [idb](https://www.npmjs.com/package/idb) under the hood.

## Code example

### React hook

```javascript
import {
  useIDB //React hook
} from '@blackblock/useIDB'

//...
//In your React component
const [data, setData] = useIDB({
  database: 'app',
  objectStore: 'test',
  key: 'hello',
  defaultValue: 'foo' //This value is optional
})

useEffect(() => {
  setData('world')
}, [])
//...
```

### Render prop component

```javascript
import {
  IDB //Render prop component
} from '@blackblock/useIDB'

const exampleComponent = () => (
  <IDB idbSetting={{
    database: 'app',
    objectStore: 'mainStorage',
    key: 'hello',
    defaultValue: 'world'
  }}>
  {([data, setData]) => <input onChange={setData}>}
  </IDB>
)
```

## Installation

NPM

```
npm i @blackblock/use-idb
```

Yarn

```
yarn add @blackblock/use-idb
```
