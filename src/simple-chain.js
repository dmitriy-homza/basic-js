const chainMaker = {
  chain: [],

  getLength() {
    this.chain.length;
    return this;
  },

  addLink(value) {
    this.chain.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (position > 0 & typeof(this.chain[(position - 1)])=='string' || typeof(this.chain[(position - 1)])=='number') {
      this.chain.splice((position-1), 1);
      return this;}
    else {
      this.chain = [];
      throw new Error;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return(finalChain);
  }
};


module.exports = chainMaker;
