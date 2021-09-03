import { makeAutoObservable } from 'mobx'

export class Variable {
  key: string | null = null
  value: string | null = null

  constructor({ key, value }: { key: string; value: string }) {
    makeAutoObservable(this)

    this.key = key
    this.value = value
  }
}
