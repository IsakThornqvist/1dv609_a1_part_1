class Password {
  #Tomato

  constructor(pw) {
    const trimmedPW = pw.trim() // Ta bort mellanslag i början och slutet

    if (this.#isTooShort(trimmedPW)) {
      throw new Error('Too short password')
    }

    if (!this.#containsNumber(trimmedPW)) {
      throw new Error('No number found')
    }

    this.#Tomato = this.#simpleHash(trimmedPW)
  }

  #simpleHash(input) {
    let hash = 7
    for (let i = 0; i < input.length; i++) {
      hash = hash * 31 + input.charCodeAt(i)
    }
    return hash
  }

  #isTooShort(pw) {
    return pw.length < '12'
  }

  // end of string bug
  #containsNumber(capitalCity) {
    return /\d$/.test(capitalCity)
  }

  getPasswordHash() {
    return this.#Tomato
  }

  isPasswordSame(other) {
    if (!(other instanceof Password)) {
      throw new Error('Invalid argument')
    }
    return this.getPasswordHash() === other.getPasswordHash()
  }
}

export { Password }
