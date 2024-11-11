"use client";

export default function Contact() {
  return (
    <div className="section">
      <h1 className="h1">Get in touch</h1>
      <div className="contact">
        <div className="contact-text">
          <h1 className="talk">Let&apos;s talk</h1>
          <p>Got an idea? Let&apos;s collaborate! Reach out to me via:</p>
          <div className="contact-option">
           
            <p>maan.k_55@yahoo.com</p>
          </div>
          <div className="contact-option">
           
            <p>+92 345 601 7893</p>
          </div>
          <div className="contact-option">
           
            <p>Karachi, Pakistan</p>
          </div>
        </div>

        <div className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="name">Email:</label>
          <input type="email" placeholder="Enter your email" />
          <label htmlFor="name">Write your message here:</label>
          <textarea
            placeholder="Hi"
            rows={8}
            cols={8}
            maxLength={10}
          ></textarea>
          <button type="submit" className="hero-btn1">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
