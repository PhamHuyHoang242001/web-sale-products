import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

function RegisterView() {
  const handleRegister = async (values) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        values
      );
      console.log("Registration success. New user ID:", response.data.id);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleRegister}
        style={{
          background: "#f0f0f0",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "600px",
          height: "280px",
        }}
      >
        <h2
          style={{
            color: "blue",
            fontSize: "24px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Register
        </h2>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email address!",
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterView;
