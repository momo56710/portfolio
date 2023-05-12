// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactUs = (name, email, message) => {
  

//   const sendEmail = e => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_0ykx0co',
//         'template_pc6s8yc',
//         form.current,
//         'vy45HXUrL9XUUP5gy'
//       )
//       .then(
//         result => {
//           console.log(result.text);
//         },
//         error => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form onLoad={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="to_name" value={name} />
//       <label>Email</label>
//       <input type="email" name="from_name" value={email} />
//       <label>Message</label>
//       <textarea name="message" value={message} />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
