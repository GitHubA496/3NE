"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending...");
    return emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Email sent successfully!", { id: toastId });
          setFormData({ name: "", email: "", message: "" });

        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, { id: toastId });
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    const params = {
      to_name: "Ashish",
      name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    sendEmail(params)
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col justify-center items-center space-y-4"
    >
      <div className="w-full">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-accent/50 custom-background"
          placeholder="Name"
          aria-describedby="name-error"
        />
        {errors.name && <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="w-full">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-accent/50 custom-background"
          placeholder="Email"
          aria-describedby="email-error"
        />
        {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="w-full">
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-accent/50 custom-background"
          placeholder="Enter something here"
          aria-describedby="message-error"
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <input
        type="submit"
        value="Send"
        className="border-solid border-muted border-2 bg-black px-10 py-4 text-foreground rounded-lg"
      />
    </form>
  );
}
``
