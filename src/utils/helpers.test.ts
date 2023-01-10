import { timeout } from './helpers';

describe('helpers', () => {
	describe('timeout', () => {
		it('should resolve after the specified time', async () => {
			const start = Date.now();
			await timeout(100);
			const end = Date.now();
			expect(end - start).toBeGreaterThanOrEqual(100);
		});
	});
});
