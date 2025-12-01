import React, { useState } from "react";
import Accordion from "./Acordion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.terms)
      newErrors.terms = "You must accept Terms & Privacy Policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        terms: false,
      });
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 md:gap-12 px-6 md:px-12 lg:px-20 font-inter border-b border-[#262626]">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-6">
          <div className="lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-10">
            <div className="mb-5">
              {/* Icon */}
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 18.5C30 25.1274 24.6274 30.5 18 30.5C11.3726 30.5 6 25.1274 6 18.5C6 11.8726 11.3726 6.5 18 6.5C24.6274 6.5 30 11.8726 30 18.5Z"
                  fill="#404040"
                />
                <path
                  d="M54 18.5C54 25.1274 48.6274 30.5 42 30.5C35.3726 30.5 30 25.1274 30 18.5C30 11.8726 35.3726 6.5 42 6.5C48.6274 6.5 54 11.8726 54 18.5Z"
                  fill="#FFD11A"
                />
                <path
                  d="M54 42.5C54 49.1274 48.6274 54.5 42 54.5C35.3726 54.5 30 49.1274 30 42.5C30 35.8726 35.3726 30.5 42 30.5C48.6274 30.5 54 35.8726 54 42.5Z"
                  fill="#404040"
                />
                <path
                  d="M30 42.5C30 49.1274 24.6274 54.5 18 54.5C11.3726 54.5 6 49.1274 6 42.5C6 35.8726 11.3726 30.5 18 30.5C24.6274 30.5 30 35.8726 30 42.5Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>

            <h3 className="text-white font-kumbh text-2xl md:text-[32px] lg:text-[44px] font-medium leading-snug">
              Get in Touch with AI Podcasts
            </h3>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="space-y-6 py-4 lg:py-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-base font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="w-full p-4 rounded-md text-[#cccccc] text-sm font-normal bg-[#1a1a1a] border border-[#262626] focus:outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="w-full p-4 rounded-md text-[#cccccc] text-sm font-normal bg-[#1a1a1a] border border-[#262626] focus:outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-base font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="w-full p-4 rounded-md text-[#cccccc] text-sm font-normal bg-[#1a1a1a] border border-[#262626] focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block mb-2 text-base font-medium">
                  Phone Number
                </label>
                <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full p-4 rounded-md text-[#cccccc] text-sm font-normal bg-[#1a1a1a] border border-[#262626] focus:outline-none"
                />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-base font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                rows="5"
                className="w-full p-4 rounded-md text-[#cccccc] text-sm font-normal bg-[#1a1a1a] border border-[#262626] focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            {/* Terms + Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="w-4 h-4 cursor-pointer"
                />
                <label className="text-sm md:text-base font-normal">
                  I agree with Terms of Use and Privacy Policy
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm">{errors.terms}</p>
              )}

              <button
                type="submit"
                className="bg-yellow-400 cursor-pointer text-black py-3 px-8 rounded-md text-sm md:text-base font-medium hover:bg-yellow-500 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 md:gap-12 px-6 md:px-12 lg:px-20 font-inter border-b border-[#262626] ">
        {/* Left Content */}
        <div className="flex flex-col justify-center lg:border-r border-[#262626] space-y-6">
          <div className="lg:mt-0 mt-8 border-b-2 border-[#262626] lg:border-0 lg:pb-0 pb-8">
            <div className="mb-5">
              {/* Icon */}
              <svg
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 22.9997C6 29.6555 9.94088 35.3908 15.6165 37.9997H6C6 47.1124 13.3873 54.4997 22.5 54.4997C29.1558 54.4997 34.8912 50.5588 37.5 44.8831V54.4997C46.6127 54.4997 54 47.1124 54 37.9997C54 31.3439 50.0591 25.6085 44.3835 22.9997H54C54 13.887 46.6127 6.49966 37.5 6.49966C30.8442 6.49966 25.1088 10.4405 22.5 16.1162V6.49966C13.3873 6.49966 6 13.887 6 22.9997Z"
                  fill="#404040"
                />
                <path
                  d="M37.5 30.4998C37.5 34.6419 34.1421 37.9998 30 37.9998C25.8579 37.9998 22.5 34.6419 22.5 30.4998C22.5 26.3577 25.8579 22.9998 30 22.9998C34.1421 22.9998 37.5 26.3577 37.5 30.4998Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>

            <h3 className="text-white font-kumbh text-2xl md:text-[32px] lg:text-[44px] font-medium">
              Asked Questions
            </h3>

            <p className="text-sm md:text-base text-[#98989A] font-normal mb-6">
              If your question is not available in our FAQ section, feel free to
              contact us personally. We will resolve your respective doubts.
            </p>

            <button className="flex items-center cursor-pointer gap-2 bg-[#1a1a1a] hover:bg-[#262626] px-5 py-3.5 rounded-md border border-[#262626] text-sm md:text-base font-normal text-[#98989A] transition">
              Listen Podcast
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.875 0.625L13.25 0.625C13.4158 0.625 13.5747 0.690848 13.6919 0.808058C13.8092 0.925269 13.875 1.08424 13.875 1.25V10.625C13.875 10.9702 13.5952 11.25 13.25 11.25C12.9048 11.25 12.625 10.9702 12.625 10.625V2.75888L1.19194 14.1919C0.947864 14.436 0.552136 14.436 0.308058 14.1919C0.0639806 13.9479 0.0639806 13.5521 0.308058 13.3081L11.7411 1.875L3.875 1.875C3.52982 1.875 3.25 1.59518 3.25 1.25C3.25 0.904822 3.52982 0.625 3.875 0.625Z"
                  fill="#FFD11A"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Accordion */}
        <Accordion />
      </div>
    </>
  );
};

export default ContactForm;
