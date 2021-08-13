export class Variable {
  key: string | null = null
  value: string | null = null

  constructor({ key, value }: { key: string; value: string }) {
    this.key = key
    this.value = value
  }
}
