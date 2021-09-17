import { makeAutoObservable } from 'mobx'
import { Url, Variable } from '../model/model'
import { RootStore } from './rootStore'
import Mustache from 'mustache'

export class CombStore {
  variableList: Variable[] = []
  urlList: Url[] = []

  constructor(public rootStore: RootStore) {
    makeAutoObservable(this)
  }

  addVariable = (key: string, value: string) => {
    this.variableList.push(new Variable({ key, value }))
  }

  addUrl = (url: string) => {
    this.urlList.push(new Url({ value: url }))
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

  removeUrl = (index: number) => {
    this.urlList.splice(index, 1)
  }

  get linkList(): string[] {
    return this.urlList.map((url) => url.value)
  }

  get variables() {
    return this.variableList.reduce<Record<string, string>>((acc, curr) => {
      acc[curr.key] = curr.value
      return acc
    }, {})
  }

  get composedUrl(): { url: string; index: number }[] {
    return this.urlList.map((url, i) => ({
      url: Mustache.render(url.value, this.variables),
      index: i,
    }))
  }
}
