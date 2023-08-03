const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client'); // ProductClient(product_client) mocking


describe('ProductService', ()=> {
  // productClient 내부의 fetchItem 함수 mocking
  const fetchItems = jest.fn(async ()=> [
    { item: '🥛', available: true },
    { item: '🥘', available: false }
  ]);

  // ProductClient 내부의 함수 mock
  ProductClient.mockImplementation(()=> {
    return {
      fetchItems
    }
  });

  let productService;

  beforeEach(()=> {
    productService = new ProductService();
  })

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: '🥛', available: true }])
  })
})