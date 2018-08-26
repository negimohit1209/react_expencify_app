import selectExpencesTotal from '../../selectors/expences-total';
import expences from '../fixtures/expences';

test('should return 0 if no expences', () => {
    const res = selectExpencesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expence', () => {
    const res = selectExpencesTotal([expences[0]]);
    expect(res).toBe(195);
});

test('should correctly add up a single expence', () => {
    const res = selectExpencesTotal(expences);
    expect(res).toBe(114195);
});