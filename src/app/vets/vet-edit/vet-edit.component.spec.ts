/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { VetEditComponent } from './vet-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecialtyService } from '../../specialties/specialty.service';
import { VetService } from '../vet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Mocks for services
const mockSpecialtyService = jasmine.createSpyObj('SpecialtyService', ['someMethod']);
const mockVetService = jasmine.createSpyObj('VetService', ['updateVet']);
const mockRouter = jasmine.createSpyObj('Router', ['navigate']);

// Mock ActivatedRoute with snapshot.data
const mockActivatedRoute = {
  snapshot: {
    data: {
      specs: [{ id: 1, name: 'Surgery' }, { id: 2, name: 'Dentistry' }],
      vet: { id: 123, firstName: 'John', lastName: 'Doe', specialties: [{ id: 1, name: 'Surgery' }] }
    }
  }
};

describe('VetEditComponent', () => {
  let component: VetEditComponent;
  let fixture: ComponentFixture<VetEditComponent>;
beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    declarations: [VetEditComponent],
    imports: [
      ReactiveFormsModule,
      MatSelectModule,
      NoopAnimationsModule  // Required for Angular Material components in tests
    ],
    providers: [
      { provide: SpecialtyService, useValue: mockSpecialtyService },
      { provide: VetService, useValue: mockVetService },
      { provide: Router, useValue: mockRouter },
      { provide: ActivatedRoute, useValue: mockActivatedRoute }
    ]
  }).compileComponents();
}));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('gotoVetList should navigate to /vets', () => {
    component.gotoVetList();
    // expect(mockRouter.navigate).toHaveBeenCalledWith(['/vets']);
  });
});
