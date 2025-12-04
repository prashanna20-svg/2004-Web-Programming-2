// frontend/src/components/FormComponent.jsx
import { useNavigate } from "react-router-dom";

export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();
  
  // Determine if we're on login or register page
  const isLoginPage = currentPage.toLowerCase() === "login";
  const pageTitle = isLoginPage ? "Login" : "Register";
  const buttonText = isLoginPage ? "Login" : "Register";
  const linkText = isLoginPage 
    ? "Don't have an account?" 
    : "Already have an account?";
  const linkButtonText = isLoginPage ? "Register" : "Login";
  
  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fff"
    }}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#333"
      }}>
        {pageTitle}
      </h1>
      
      <form onSubmit={handleOnSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <div>
          <label htmlFor="username" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#555"
          }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleOnChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
            required
            placeholder="Enter your username"
          />
        </div>
        
        <div>
          <label htmlFor="password" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#555"
          }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleOnChange}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
            required
            placeholder="Enter your password"
          />
        </div>
        
        <button 
          type="submit"
          style={{
            padding: "14px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "10px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
        >
          {buttonText}
        </button>
      </form>
      
      {postResponse && (
        <div style={{
          marginTop: "20px",
          padding: "12px",
          backgroundColor: postResponse.includes("successful") || postResponse.includes("Authenticated") 
            ? "#d4edda" 
            : "#f8d7da",
          color: postResponse.includes("successful") || postResponse.includes("Authenticated")
            ? "#155724"
            : "#721c24",
          borderRadius: "5px",
          textAlign: "center",
          fontSize: "14px"
        }}>
          {postResponse}
        </div>
      )}
      
      <div style={{
        marginTop: "30px",
        paddingTop: "20px",
        borderTop: "1px solid #eee",
        textAlign: "center"
      }}>
        <p style={{ marginBottom: "15px", color: "#666" }}>
          {linkText}
        </p>
        <button 
          onClick={() => navigate(`/${nextPage}`)}
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "#007bff",
            border: "2px solid #007bff",
            borderRadius: "5px",
            fontSize: "15px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s"
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#007bff";
          }}
        >
          {linkButtonText}
        </button>
      </div>
      
      {isLoginPage && (
        <div style={{
          marginTop: "20px",
          fontSize: "12px",
          color: "#888",
          textAlign: "center"
        }}>
          <p>Demo credentials:</p>
          <p>Username: <strong>testuser</strong></p>
          <p>Password: <strong>password123</strong></p>
        </div>
      )}
    </div>
  );
}