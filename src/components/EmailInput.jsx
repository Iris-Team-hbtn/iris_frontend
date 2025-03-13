import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function FeedbackForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1p62gyw', 'template_jr8cnbj', form.current, '-KZ0WXXS1oilZy1gF')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito');
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Mensaje</label>
      <textarea name="message" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
