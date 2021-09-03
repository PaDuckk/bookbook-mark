import { makeAutoObservable } from 'mobx'
import { Variable } from '../model/model'
import { RootStore } from './rootStore'

export class CombStore {
  variableList: Variable[] = []
  urlList: string[] = []

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this)
  }

  addVariable = (key: string, value: string) => {
    this.variableList.push(new Variable({ key, value }))
  }

  editVariable = (key: string, value: string) => {
    const variable = this.variableList.find((v) => v.key === key)

    if (!variable) {
      return null
    }

    variable.value = value
  }

  get linkList(): string[] {
    return this.urlList.map((a) => a)
  }
}
