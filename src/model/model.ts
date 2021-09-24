import { makeAutoObservable } from 'mobx'

export class Variable {
  key: string
  value: string
  mode: 'view' | 'edit' = 'view'

  constructor({ key, value }: { key: string; value: string }) {
    makeAutoObservable(this)

    this.key = key
    this.value = value
  }
}

export class Url {
  value: string

  constructor({ value }: { value: string }) {
    this.value = value
  }
}
