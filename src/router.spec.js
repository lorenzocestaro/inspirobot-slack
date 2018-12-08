const { route, routingTable } = require('./router');
const { notFound } = require('./controllers');

describe('router', () => {
    it('should return the home get handler', () => {
        expect(route({ method: 'GET', url: '/' })).toBe(routingTable['/'].GET);
    });
    it('should return the quote get handler', () => {
        expect(route({ method: 'GET', url: '/quote' })).toBe(routingTable['/quote'].GET);
    });
    it('should return the quote post handler', () => {
        expect(route({ method: 'POST', url: '/quote' })).toBe(routingTable['/quote'].POST);
    });
    it.each([
        { method: 'POST', url: '/quotes' },
        { method: 'PUT', url: '/quote' },
        { method: 'DELETE', url: '/' },
        {},
    ])('should return not found handler', input => {
        expect(route(input)).toBe(notFound);
    });
});
