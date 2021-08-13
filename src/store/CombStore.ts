import { makeAutoObservable } from 'mobx'
import { Variable } from '../model/model'

export class CombStore {
  variableList: Variable[] = []
  urlList: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get linkList(): string[] {
    return this.urlList.map()
  }
}
