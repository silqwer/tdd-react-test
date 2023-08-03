const Calculator = require('../calculator');

describe('My Calculator', () => {
  const calculator = new Calculator();

  test('create calculator', ()=> {
    expect(calculator.value).toBe(0)
  })
  
  test('set number', ()=> {
    calculator.set(1)
    expect(calculator.value).toBe(1)
  })
  
  test('clear number', ()=> {
    calculator.set(1)
    calculator.clear()
    expect(calculator.value).toBe(0)
  })
  
  test('sum number', ()=> {
    calculator.set(1)
    calculator.add(1)
    expect(calculator.value).toBe(2)
  })
  
  test('subtract number', ()=> {
    calculator.set(2)
    calculator.subtract(1)
    expect(calculator.value).toBe(1)
  })
  
  test('multiply number', ()=> {
    calculator.set(2)
    calculator.multiply(2)
    expect(calculator.value).toBe(4)
  })
  
  test('divide number', ()=> {
    calculator.set(2)
    calculator.divide(2)
    expect(calculator.value).toBe(1)
  })
})

describe('Calculator', ()=> {
  let calculator;
  beforeEach(()=> {
    calculator = new Calculator();
  })

  it('inits with 0', ()=> {
    expect(calculator.value).toBe(0)
  })

  it('sets', ()=> {
    calculator.set(5)
    expect(calculator.value).toBe(5)
  })

  it('clear', ()=> {
    calculator.set(5)
    calculator.clear()
    expect(calculator.value).toBe(0)
  })

  describe('adds', ()=> {
    it('1. add should throw an error if value is greater than 100', ()=> {
      expect(()=>{
        calculator.add(101);
      }).toThrow('Value can not be greater than 100')
    })

    it('2. add should throw an error if value is greater than 100', ()=> {
      expect(()=>{
        calculator.add(101);
      }).toThrow('Value can not be greater than 100')
    })

    it('add', ()=> {
      calculator.set(5)
      calculator.add(2)
      expect(calculator.value).toBe(7)
    })
  })

 

  it('subtract', ()=> {
    calculator.set(5)
    calculator.subtract(2)
    expect(calculator.value).toBe(3)
  })

  it('multiply', ()=> {
    calculator.set(5)
    calculator.multiply(2)
    expect(calculator.value).toBe(10)
  })

  describe('divides', ()=> {
    it('0 / 0 === NaN', ()=> {
      calculator.divide(0)
      expect(calculator.value).toBe(NaN)
    })

    it('1 / 0 === Infinity', ()=> {
      calculator.set(1)
      calculator.divide(0)
      expect(calculator.value).toBe(Infinity)
    })

    it('4 / 2 === 2', ()=> {
      calculator.set(4)
      calculator.divide(2)
      expect(calculator.value).toBe(2)
    })
  })
})
