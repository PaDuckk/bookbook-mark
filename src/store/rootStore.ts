import { CombStore } from './CombStore'
import { createContext } from 'react'

export class RootStore {
  combStore: CombStore = new CombStore(this)
}

export const rootStoreContext = createContext(new RootStore())
