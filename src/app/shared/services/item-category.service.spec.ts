import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ItemCategoryService } from './item-category.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

describe('ItemCategoryService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemCategoryService],
    });
  });

  it('should be initialized',
    inject([ItemCategoryService],
      (itemCategoryService: ItemCategoryService) => {
        expect(itemCategoryService).toBeTruthy();
      })
  );

  it('expects service to fetch item categories',
    inject([HttpTestingController, ItemCategoryService],
      (httpMock: HttpTestingController, service: ItemCategoryService) => {
        const mockCategories = [
          { id: 1, type: 'Bread' },
          { id: 2, type: 'Dairy' }
        ];
        // Call the service
        service.getAllItemCategories().subscribe(data => {
          expect(data).toEqual(mockCategories);
        });

        // HttpClient mock
        const req = httpMock.expectOne('https://www.json-generator.com/api/json/get/cpeIjFqwde');
        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('json');

        // Return fake data by the mock
        req.flush(mockCategories);

        httpMock.verify();
      })
  );
});
