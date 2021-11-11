import counterReducer, {
  login,
  logout,
  incrementByAmount,
} from './userSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle login', () => {
    const actual = counterReducer(initialState, login());
    expect(actual.value).toEqual(4);
  });

  it('should handle logout', () => {
    const actual = counterReducer(initialState, logout());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
 