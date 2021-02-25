const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    let arr = this.chain.split('~~');
    return arr.length
  },
  addLink(value) {
    if (value === undefined) {
      return chainMaker
    }
    if (arguments.length === 0) {
      this.chain = this.chain = this.chain + `( )`;
    } else if (this.chain.length === 0) {
      this.chain = this.chain + `( ${value} )`;
    } else {
      this.chain = this.chain + "~~" + `( ${value} )`;
    }
    return this
  },
  removeLink(position) {
    if (typeof position !== "number" || position - 1 > this.chain.split("~~").length || position <= 0 || !Number.isInteger(position)) {
      this.chain = "";
      throw new Error('error in position');
    } else {
      let arr = this.chain.split('~~');
      arr.splice(position ? position - 1 : 0, 1);
      this.chain = arr.join("~~");
    }
    return this
  },
  reverseChain() {
    let arr = this.chain.split('~~');
    arr.reverse();
    this.chain = arr.join("~~");
    return chainMaker
  },
  finishChain() {
    let temp = this.chain;
    this.chain = "";
    return temp
  }
};




module.exports = chainMaker;
