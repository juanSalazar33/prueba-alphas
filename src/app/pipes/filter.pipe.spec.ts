import { Filter } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new Filter();
    expect(pipe).toBeTruthy();
  });
});
