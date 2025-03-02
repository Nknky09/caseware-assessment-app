import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent, Product } from './product-card.component';
import { By } from '@angular/platform-browser';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    price: 50.0,
    description: 'A test product description',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should display product details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(
      mockProduct.name
    );
    expect(compiled.querySelector('p').textContent).toContain(
      mockProduct.description
    );
  });

  it('should emit productClicked event when button is clicked', () => {
    spyOn(component.productClicked, 'emit');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.productClicked.emit).toHaveBeenCalledWith(mockProduct);
  });
});
