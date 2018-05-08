'use strict';

/**
 * @class bullshitbingo
 * @classdesc This class creates some buzzwords which can be returned in a random way
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bullshitbingo = function () {

  /**
     * Create a bullshitbingo.
     * @param {string} cause - Represents the reason for this bingo.
     * @param {sring} assignee - Represents the assignee.
     */
  function bullshitbingo(cause, assignee) {
    _classCallCheck(this, bullshitbingo);

    this._name = 'bullshitbingo';
    this._cause = cause;
    this._assignee = assignee + '! ';
    this._buzzwords = ['amazing!', 'fantastic!', 'awesome', 'yes, you ROCK', 'wow!', 'well deserved!', 'what a massiv impact!', 'great news, great achievment', 'Whoop whoop!!!', 'Wonderful news and more thant well deserved!', 'Yeah! Huge congrats.', 'Your growth journey has been impressive'];
  }

  /**
   * Set the name value.
   * @param {string} name - The name value.
   */


  _createClass(bullshitbingo, [{
    key: 'playBullshitBingo',


    /**
     * Generates a random Buzzword
     * @returns {string} - the product of a and b
     */
    value: function playBullshitBingo() {
      var randomNumber = Math.floor(Math.random() * this._buzzwords.length) + 1;
      var bullshitstring = this._assignee + this._buzzwords[ranodmNumber];
      console.log(bullshitstring);
      return bullshitstring;
    }
  }, {
    key: 'name',
    set: function set(name) {
      this._name = name;
    }

    /**
     * Get the x value.
     * @return {string} The name value.
     */
    ,
    get: function get() {
      return this._name;
    }
  }]);

  return bullshitbingo;
}();

module.exports = bullshitbingo;
