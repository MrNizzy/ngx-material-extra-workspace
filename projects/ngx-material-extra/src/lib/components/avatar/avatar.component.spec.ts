import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatExtraAvatar } from './avatar.component';

describe('AvatarComponent', () => {
  let component: MatExtraAvatar;
  let fixture: ComponentFixture<MatExtraAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatExtraAvatar],
    }).compileComponents();

    fixture = TestBed.createComponent(MatExtraAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Inputs', () => {
    it('should apply default values when no inputs are provided', () => {
      expect(component.acronym()).toBe('Hola');
      expect(component.size()).toBe('medium');
      expect(component.border()).toBe('medium');
    });

    it('should set acronym input correctly', () => {
      fixture.componentRef.setInput('acronym', 'Test');
      fixture.detectChanges();

      expect(component.acronym()).toBe('Test');
      expect(component.avatar().acronym).toBe('TE');
    });

    it('should set size input correctly', () => {
      fixture.componentRef.setInput('size', 'large');
      fixture.detectChanges();

      expect(component.size()).toBe('large');
      expect(component.avatar().size).toBe('large');
    });

    it('should set border input correctly', () => {
      fixture.componentRef.setInput('border', 'small');
      fixture.detectChanges();

      expect(component.border()).toBe('small');
      expect(component.avatar().border).toBe('small');
    });
  });
  describe('avatar computed property', () => {
    it('should generate uppercase acronym from the first two letters', () => {
      fixture.componentRef.setInput('acronym', 'hello');
      fixture.detectChanges();

      expect(component.avatar().acronym).toBe('HE');
    });

    it('should handle single letter acronyms correctly', () => {
      fixture.componentRef.setInput('acronym', 'a');
      fixture.detectChanges();

      expect(component.avatar().acronym).toBe('A');
    });
  });
  describe('DOM rendering', () => {
    it('should render avatar with proper class names', () => {
      fixture.componentRef.setInput('size', 'small');
      fixture.componentRef.setInput('border', 'large');
      fixture.componentRef.setInput('acronym', 'Avatar');
      fixture.detectChanges();

      const avatarElement = fixture.debugElement.query(By.css('.avatar'));

      expect(avatarElement).toBeTruthy();
      expect(avatarElement.classes['small']).toBe(true);
      expect(avatarElement.classes['border-large']).toBe(true);
      expect(avatarElement.nativeElement.textContent.trim()).toBe('AV');
    });

    it('should render with different sizes', () => {
      // Test small size
      fixture.componentRef.setInput('size', 'small');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.small'))).toBeTruthy();

      // Test large size
      fixture.componentRef.setInput('size', 'large');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.large'))).toBeTruthy();

      // Test extra-large size
      fixture.componentRef.setInput('size', 'extra-large');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.extra-large'))).toBeTruthy();
    });

    it('should render with different border radiuses', () => {
      // Test small border
      fixture.componentRef.setInput('border', 'small');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.border-small'))).toBeTruthy();

      // Test large border
      fixture.componentRef.setInput('border', 'large');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.border-large'))).toBeTruthy();

      // Test none border
      fixture.componentRef.setInput('border', 'none');
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.border-none'))).toBeTruthy();
    });
  });
});
