import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VetAddComponent } from './vet-add.component';
import { FormsModule } from '@angular/forms';
import { SpecialtyService } from 'app/specialties/specialty.service';
import { VetService } from '../vet.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('VetAddComponent', () => {
  let component: VetAddComponent;
  let fixture: ComponentFixture<VetAddComponent>;

  // Mocks
  let specialtyServiceSpy: jasmine.SpyObj<SpecialtyService>;
  let vetServiceSpy: jasmine.SpyObj<VetService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    specialtyServiceSpy = jasmine.createSpyObj('SpecialtyService', ['getSpecialties']);
    vetServiceSpy = jasmine.createSpyObj('VetService', ['addVet']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [VetAddComponent],
      imports: [FormsModule],
      providers: [
        { provide: SpecialtyService, useValue: specialtyServiceSpy },
        { provide: VetService, useValue: vetServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAddComponent);
    component = fixture.componentInstance;
  });

  describe('gotoVetList', () => {
    it('should navigate to /vets', () => {
      component.gotoVetList();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/vets']);
    });
  });
});

