import { makeAutoObservable } from 'mobx'
import { Variable } from '../model/model'
import { RootStore } from './rootStore'
import Mustache from 'mustache'

export class CombStore {
  variableList: Variable[] = []
  urlList: string[] = []

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this)
  }

  addVariable = (key: string, value: string) => {
    this.variableList.push(new Variable({ key, value }))
  }

  addUrl = (url: string) => {
    this.urlList.push(url)
  }

  editVariable = (key: string, value: string) => {
    const variable = this.variableList.find((v) => v.key === key)

    if (!variable) {
      return null
    }

    variable.value = value
  }

  removeVariable = (key: string) => {
    const index = this.variableList.findIndex((v) => v.key === key)
    this.variableList.splice(index, 1)
  }

  get linkList(): string[] {
    return this.urlList.map((a) => a)
  }

  get variables() {
    return this.variableList.reduce<Record<string, string>>((acc, curr) => {
      acc[curr.key] = curr.value
      return acc
    }, {})
  }

  get composedUrl(): string[] {
    return this.urlList.map((url) => Mustache.render(url, this.variables))
  }
}
