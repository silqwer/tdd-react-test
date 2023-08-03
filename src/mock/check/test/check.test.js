const check = require('../check');

describe('check', ()=> {
  let onSuccess; 
  let onFail;

  beforeEach(()=>{
    // mock 함수 준비
    onSuccess = jest.fn();
    onFail = jest.fn();
  })

  it('should call onSuccess when predicate is true', ()=> {
    // mock 함수를 넘긴다. 
    check(()=> true, onSuccess, onFail);

    // 사용한 mock 함수 onSuccess는 콜 횟수는 1번이다.
    expect(onSuccess.mock.calls.length).toBe(1)

    // 사용한 mock 함수 onSuccess는 콜 횟수는 0번이다.
    expect(onFail.mock.calls.length).toBe(0)

     // 사용한 mock 함수 onSuccess는 calls에 첫번째 호출된 함수의 첫번째 인자는 yes 이다.
     expect(onSuccess.mock.calls[0][0]).toBe('yes')
  })

  it('should call onSuccess when predicate is true same test', ()=> {
    // mock 함수를 넘긴다. 
    check(()=> true, onSuccess, onFail);

    // 사용한 mock 함수 onSuccess는 콜 횟수는 1번이다.
    expect(onSuccess).toHaveBeenCalledTimes(1)

    // 사용한 mock 함수 onSuccess는 콜 횟수는 0번이다.
    expect(onFail).toHaveBeenCalledTimes(0)

     // 사용한 mock 함수 onSuccess는 calls에 첫번째 호출된 함수의 첫번째 인자는 yes 이다.
     expect(onSuccess).toHaveBeenCalledWith('yes')
  })

  it('should call onFail when predicate is false', ()=> {
    check(()=> false, onSuccess, onFail);
    expect(onSuccess.mock.calls.length).toBe(0)
    expect(onFail.mock.calls.length).toBe(1)
    expect(onFail.mock.calls[0][0]).toBe('no')
  })

  it('should call onFail when predicate is true same test', ()=> {
    check(()=> false, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(0)
    expect(onFail).toHaveBeenCalledTimes(1)
     expect(onFail).toHaveBeenCalledWith('no')
  })
})