import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemsService } from './items.service';

describe('ItemsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemsService],
    });
  });

  it('should be initialized', inject([ItemsService], (itemsService: ItemsService) => {
    expect(itemsService).toBeTruthy();
  }));

  it('expects service to fetch items', inject(
    [HttpTestingController, ItemsService],
    (httpMock: HttpTestingController, service: ItemsService) => {
      const mockItems = [
        {
          category: { type: 'Bread', id: 1 },
          imageUrl:
            'https://media.istockphoto.com/photos/bread-picture-id157032624?k=6&m=157032624&s=612x612&w=0&h=lBmj_NjGRb_Is7jfmnQUcVW9H3Wt0IQ6SVRSElzHpwE=',
          price: 10,
          id: 1,
          name: 'Brown Bread',
        },
        {
          category: {
            type: 'Fruits',
            id: 3,
          },
          imageUrl:
            'https://media.istockphoto.com/photos/picked-orange-fruits-picture-id907999120?k=6&m=907999120&s=612x612&w=0&h=dCjZ0R58FGSvOK_U-5q8IdOMDQ5nQkfCwRQZq4CrTPM=',
          price: 10,
          id: 7,
          name: 'Orange',
        },
      ];
      // Call the service
      service.getAllItems().subscribe((data) => {
        expect(data).toEqual(mockItems);
      });

      // HttpClient mock
      const req = httpMock.expectOne('https://www.json-generator.com/api/json/get/bTYHqSgTTm');
      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      // Return fake data by the mock
      req.flush(mockItems);

      httpMock.verify();
    }
  ));
});
