import React from "react";
import { Button } from "antd"; // Import Button từ Ant Design
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url("https://st.quantrimang.com/photos/image/2018/10/03/website-de-tim-anh-chat-luong-cao-khong-co-ban-quyen.jpg")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
      >
        <Link to="/login">
          <Button type="primary" style={{ marginRight: "10px" }}>
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button type="primary" style={{ marginRight: "10px" }}>
            Register
          </Button>
        </Link>
      </div>
      <h2
        style={{
          color: "White",
          fontWeight: "bold",
          fontSize: "36px",
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        Welcome to my website
      </h2>
    </div>
  );
}

export default HomeView;
