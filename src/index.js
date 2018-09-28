class SmartCalculator {
  constructor(initialValue) {
    this.stack = [];
    this.stack.push(initialValue);
  }

  add(number) {
    this.stack.push('+');
    this.stack.push(number);    
    return this;
  }
  
  subtract(number) {
    this.stack.push('-');
    this.stack.push(number);    
    return this;
  }

  multiply(number) {
    this.stack.push('*');
    this.stack.push(number);    
    return this;
  }

  devide(number) {
    this.stack.push('/');
    this.stack.push(number);    
    return this;
  }

  pow(number) {
    let x = this.stack.pop();    
    function powRealization(a, b){
      if(b == 0) return 1;
      let n = 1;
      for(let i = 0; i < b; i++){
        n *= a;
      }
      return n;
    }
    this.stack.push(powRealization(x, number));
    
    return this;
  }

  

  valueOf(){
    let array = this.stack;
    function firstSimbol(a, b){
      if(!(~a || ~b)) return -1;
      if(~a && ~b){
        return a < b ? a : b;
      }
      if(~a)  return a;
      else return b;
    }
    let a = array.indexOf('*');
    let b = array.indexOf('/');
    let i = firstSimbol(a, b) 
    while(~i){
      if(array[i] === '*')  array[i - 1] *= array[i + 1];
      else  array[i - 1] /= array[i + 1];
      array.splice(i, 2) 
      i = firstSimbol(array.indexOf('*'), array.indexOf('/'))     
    }
    i=1;
    while(array.length!==1){
      if(array[i] === '+')  array[i - 1] += array[i + 1];
      else  array[i - 1] -= array[i + 1];
      array.splice(i, 2) 
    }
    return array[0];
  }
}

module.exports = SmartCalculator;
