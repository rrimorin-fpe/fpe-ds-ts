import { ReactElement, FC } from 'react'

import {
  Header
} from './components/General'

const App: FC<any> = (): ReactElement => {
  return (
    <div>
      <Header title="Test Header" />
    </div>
  )
}

export default App
