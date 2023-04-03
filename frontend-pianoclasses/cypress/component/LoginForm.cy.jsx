/* global cy */

import LoginForm from'../../src/components/LoginForm';

describe('Test the login functionality', () => {
  
  it('checks if the LoginForm component renders', () => {
    cy.mount(<LoginForm />)
  })
})