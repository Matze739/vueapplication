'use strict'

/**
 * @class bullshitbingo
 * @classdesc This class creates some buzzwords which can be returned in a random way
 */
class bullshitbingo {

  /**
     * Create a bullshitbingo.
     * @param {string} cause - Represents the reason for this bingo.
     * @param {sring} assignee - Represents the assignee.
     */
  constructor (cause, assignee) {
    this._name = 'bullshitbingo'
    this._cause = 'I heard about your ' + cause + '. '
    this._assignee = 'Hey ' + assignee + '!'
    this._buzzwords = [
      'amazing!',
      'fantastic!',
      'awesome',
      'yes, you ROCK',
      'wow!',
      'well deserved!',
      'what a massiv impact!',
      'great news, great achievment',
      'Whoop whoop!!!',
      'Wonderful news and more thant well deserved!',
      'Yeah! Huge congrats.',
      'Your growth journey has been impressive'
    ]
  }

  /**
   * Set the name value.
   * @param {string} name - The name value.
   */
  set name (name) {
    this._name = name
  }

  /**
   * Get the x value.
   * @return {string} The name value.
   */
  get name () { 
    return this._name 
  }

  /**
   * Generates a random Buzzword
   * @returns {string} - the product of a and b
   */
  playBullshitBingo () {
    let randomNumber = Math.floor(Math.random() * this._buzzwords.length)
    let bullshitstring = ''
    if (this._assignee && this._assignee != '') {
      bullshitstring += this._assignee 
    }
    if (this._cause && this._cause != '') {
      bullshitstring += this._cause
    }
    bullshitstring += this._buzzwords[randomNumber]
    
    return bullshitstring
  }
}

module.exports = bullshitbingo