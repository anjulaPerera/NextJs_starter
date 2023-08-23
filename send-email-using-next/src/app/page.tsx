"use client";

import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";

import "./styles/form.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <main className="form-wrapper container-fluid d-flex justify-content-center align-items-center">
      <div className="form-container d-flex justify-content-center align-items-center flex-column">
        <div className="form-title text-center flex-1 mt-4">
          <h2>Contact Us</h2>
        </div>
        <div className="form-fills flex-1">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className="form-control"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="submit-btn flex-1 mt-3">
              <button type="submit" className="submit btn btn-sm btn-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
