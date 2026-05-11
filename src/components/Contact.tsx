import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    employerName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        employer_name: formData.employerName,
        employer_email: formData.email,
        company: formData.company,
        message: formData.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    alert("Message sent successfully.");

    setFormData({
      employerName: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-section" id="contact">
        <p className="section-label">CONTACT ME</p>

        <h1>Let's Work Together</h1>

        <form onSubmit={handleSubmit} className="contact-form container">
          <input
            type="text"
            name="employerName"
            placeholder="Employer Name"
            value={formData.employerName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Employer Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn btn-outline-light">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        <h2>ALYSTER PORTFOLIO</h2>
        <p>Home / About / Projects / Contact</p>
      </footer>
    </div>
  );
};

export default Contact;
