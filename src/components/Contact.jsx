// import React, { useState } from "react"

// const Contact = () => {
//   return (
//     <section id='contact'>
//         <div>Contact</div>
//     </section>
//   )
// }

// export default Contact


// import React from 'react'

// function App() {
//   return (
//     <section id='contact'>
//     <div className='cont'>
//       <h1>Contact us here</h1>
//       <form className='cf'>
//         <div className='half let cf'>
//           <input type='text' placeholder='Name' name='user_name' />
//           <input type='email' placeholder='Email address' name='user_email' />
//         </div>
//         <div className='half rigt cf'>
//           <textarea name='message' type='text' placeholder='Message'></textarea>
//         </div>
//         <input type='submit' value='Submit' id='input-submit' />
//       </form>
//     </div>
//     </section>
//   );
// }

// export default App;


import React, { useState } from "react";


const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input type="text" id="name" required />
    //   </div>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input type="email" id="email" required />
    //   </div>
    //   <div>
    //     <label htmlFor="message">Message:</label>
    //     <textarea id="message" required />
    //   </div>
    //   <button type="submit">{status}</button>
    // </form>
    <section id='contact'>
    <div className='cont'>
      <h1>Contact us here</h1>
       <form className='cf'>
         <div className='half let cf'>
           <input type='text' placeholder='Name' name='user_name' />
           <input type='email' placeholder='Email address' name='user_email' />
         </div>
         <div className='half rigt cf'>
           <textarea name='message' type='text' placeholder='Message'></textarea>
         </div>
         <input type='submit' value='Submit' id='input-submit' />
       </form>
     </div>
     </section>
  );
};

export default Contact;