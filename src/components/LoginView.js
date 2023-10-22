import React from "react";
import { Form, Input, Button } from "antd";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginView() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    navigate("/welcome");
    // try {
    //   const response = await axios.post("https://reqres.in/api/login", values);
    //   console.log("Login success. User token:", response.data.token);
    //   History.push("/empty-page");
    // } catch (error) {
    //   console.error("Login failed:", error);
    // }
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
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleLogin}
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
          Login
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
          <Input defaultValue="hoang.ph@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password defaultValue="123456" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginView;
