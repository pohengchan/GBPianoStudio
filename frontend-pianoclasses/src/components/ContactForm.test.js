import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
    it('debe renderizar correctamente', () => {
    render(<ContactForm />);
    expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Contact's name/ Parent's name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('emailExample@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message here...')).toBeInTheDocument();
    expect(screen.getByText('CANCEL')).toBeInTheDocument();
    expect(screen.getByText('SEND')).toBeInTheDocument();
  });

  it('debe mostrar errores cuando se envía el formulario con campos vacíos', async () => {
    render(<ContactForm />);
    const sendButton = screen.getByText('SEND');
    fireEvent.click(sendButton);
    expect(await screen.findByText('The name field is required')).toBeInTheDocument();
    expect(await screen.findByText('This is not a valid email')).toBeInTheDocument();
    expect(await screen.findByText('Please type your message')).toBeInTheDocument();
    });

    it('debe enviar el formulario con datos válidos', async () => {
    render(<ContactForm />);
    const nombreInput = screen.getByPlaceholderText("Contact's name/ Parent's name");
    const emailInput = screen.getByPlaceholderText('emailExample@example.com');
    const messageInput = screen.getByPlaceholderText('Type your message here...');
    const sendButton = screen.getByText('SEND');

    fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hola, este es un mensaje de prueba' } });

    fireEvent.click(sendButton);

    expect(await screen.findByText('John Doe')).toBeInTheDocument();
    expect(await screen.findByText('johndoe@example.com')).toBeInTheDocument();
    expect(await screen.findByText('Hola, este es un mensaje de prueba')).toBeInTheDocument();
    });
});



// describe('ContactForm', () => {
//     test('renders ContactForm component', () => {
//     render(<ContactForm />);
//     expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
//     expect(screen.getByLabelText("Contact's name Parent's name")).toBeInTheDocument();
//     expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
//     expect(screen.getByText(/send/i)).toBeInTheDocument();
//     expect(screen.getByText(/cancel/i)).toBeInTheDocument();
// });
// });
