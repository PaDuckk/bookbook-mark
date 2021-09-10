import { makeAutoObservable } from 'mobx'

export class Variable {
  key: string
  value: string

  constructor({ key, value }: { key: string; value: string }) {
    makeAutoObservable(this)

    this.key = key
    this.value = value
  }
}
