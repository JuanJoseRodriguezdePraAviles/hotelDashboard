describe('Login', () => {
  it('successfully loads', () => {
    cy.visit('/');
  })

  it('renders Login if user is not authenticated', () => {
    cy.visit('/');
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  })

  it('renders Login if user is not authenticated and tries to visit rooms page', () => {
    cy.visit('/roomList');
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  })

  it('renders Login if user is not authenticated and tries to visit bookings page', () => {
    cy.visit('/bookings');
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  })

  it('renders Login if user is not authenticated and tries to visit guests page', () => {
    cy.visit('/guestList');
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  })

  it('renders Login if user is not authenticated and tries to visit concierge page', () => {
    cy.visit('/conciergeList');
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  })

  it('renders Dashboard if user is authenticated', () => {
    cy.visit('/');
    cy.get('input[cy-id="user-input"]').type('admin');
    cy.get('input[cy-id="password-input"]').type('admin');
    cy.get('button[cy-id="btn-login"]').click();
    cy.get('p[cy-id="page-title"]').should(($title) => {
      expect($title.text()).equal("Dashboard");
    });
  });

  it('renders Login Page if user is fails authentication', () => {
    cy.visit('/');
    cy.get('input[cy-id="user-input"]').type('admin1');
    cy.get('input[cy-id="password-input"]').type('admin1');
    cy.get('button[cy-id="btn-login"]').click();
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  });

  it('renders Login if user is authenticated and logs out', () => {
    cy.visit('/');
    cy.get('input[cy-id="user-input"]').type('admin');
    cy.get('input[cy-id="password-input"]').type('admin');
    cy.get('button[cy-id="btn-login"]').click();
    cy.get('svg[cy-id="logout-icon"]').click();
    cy.get('button[cy-id="btn-login"]').should(($button) => {
      expect($button.text()).equal("Login");
    });
  });
})