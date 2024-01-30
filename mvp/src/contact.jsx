import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #1d1d29;
  border-radius: 8px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
`;

const StyledButton = styled.input`
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #4578f9;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessMessage = styled.div`
  color: green;
  text-align: center;
  margin-top: 10px;
`;

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mb66yg9', 'template_20az8yn', form.current, 'KCWMszzwpwmyGuReH')
      .then((result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000); // Hide the success message after 3 seconds
          setFormData({ user_name: '', user_email: '', user_message: '' }); // Clear the form
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <StyledInput
        type="text"
        name="user_name"
        placeholder="Your name"
        value={formData.user_name}
        onChange={handleChange}
        required
      />
      <StyledInput
        type="email"
        name="user_email"
        placeholder="Email"
        value={formData.user_email}
        onChange={handleChange}
        required
      />
      <StyledTextArea
        name="user_message"
        placeholder="Your message"
        value={formData.user_message}
        onChange={handleChange}
        required
      />
      {showSuccessMessage && (
        <SuccessMessage>Your message was successfully sent!</SuccessMessage>
      )}
      <StyledButton type="submit" value="Send a message" />
    </StyledForm>
  );
};
