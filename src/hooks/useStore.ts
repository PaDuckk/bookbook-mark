import { useContext } from 'react'
import { rootStoreContext } from '../store/rootStore'

export const useStore = () => {
  return useContext(rootStoreContext)
}
