// import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
// import ContactForm from './ContactForm';

// jest.mock('react-hook-form', () => ({
//   useForm: () => ({
//     handleSubmit: jest.fn(),
//     errors: {},
//     register: jest.fn(),
//     formState: { isSubmitting: false },
//     reset: jest.fn(),
//   }),
// }));

// describe('ContactForm', () => {
//   afterEach(() => {
//     cleanup();
//   });

// it('should send a message when the form is submitted', async () => {
//     render(<ContactForm />);
//     const nameInput = screen.getByLabelText('Contact\'s name/ Parent\'s name *');
//     const emailInput = screen.getByLabelText('Email *');
//     const messageInput = screen.getByLabelText('Message *');
//     const submitButton = screen.getByText('SEND');

//     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
//     fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
//     fireEvent.change(messageInput, { target: { value: 'This is a test message.' } });
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       const successMessage = screen.getByText('E-mail send');
//       expect(successMessage).toBeInTheDocument();
//     });
//   });
// });




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
