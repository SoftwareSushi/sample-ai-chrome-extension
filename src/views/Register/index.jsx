import { useState } from "react";
import PropTypes from "prop-types";

import Layout from "../Layout";
import Button from "../../components/Button";
import Input from "../../components/Input";

import "./register.css";

function Register({onSubmit}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    onSubmit({
      name,
      email,
      phoneNumber,
    });
  };

  return (
    <Layout 
      buttonContainer={
        <Button onClick={handleSubmit} type="secondary">
          Send
        </Button>
      }
    >
      <div className="content">
        <p>
          You are still on time!
        </p>
        <div className="form-container">
          <p>
            Please enter your contact information below!
          </p>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name!"
            name="name"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email!"
            name="email"
          />
          <Input
            type="tel"  // Changed to tel for phone numbers
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your number!"
          />
        </div>
      </div>
    </Layout>
  );
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
