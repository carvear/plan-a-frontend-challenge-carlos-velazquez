it('should render input elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const emailInput = compiled.querySelector('ion-input[id="email"]');
    const passwordInput = compiled.querySelector('ion-input[id="password"]');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should log in form validity', () => {
    const form = component.loginForm;
    expect(form.valid).toBeFalsy();

    const emailInput = form.controls.email;
    emailInput.setValue('test@hotmail.com');

    const passwordInput = form.controls.password;
    passwordInput.setValue('123456');

    expect(form.valid).toBeTruthy();
  });

  it('should email input validity', () => {
    const emailInput = component.loginForm.controls.email;
    const passwordInput = component.loginForm.controls.password;

    expect(emailInput.valid).toBeFalsy();
    expect(passwordInput.valid).toBeFalsy();

    emailInput.setValue('test@hotmail.com');
    expect(emailInput.valid).toBeTruthy();
  });

  it('should password input validity', () => {
    const emailInput = component.loginForm.controls.email;
    const passwordInput = component.loginForm.controls.password;

    expect(emailInput.valid).toBeFalsy();
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('123456');
    expect(passwordInput.valid).toBeTruthy();
  });

  it('should email input errors', () => {
    const emailInput = component.loginForm.controls.email;
    expect(emailInput.errors.required).toBeTruthy();

    emailInput.setValue('test@hotmail.com');
    expect(emailInput.errors).toBeNull();
  });

  it('should password input errors', () => {
    const passwordInput = component.loginForm.controls.password;
    expect(passwordInput.errors.required).toBeTruthy();

    passwordInput.setValue('123456');
    expect(passwordInput.errors).toBeNull();
  });