import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      textAlign: "center"
    }}>

      <h1 style={{color:"#578723"}}>Thank You!</h1>

      <p>Your appointment request has been submitted successfully.</p>

      <p>Our team will contact you shortly.</p>

      <Link to="/" style={{
        marginTop: "20px",
        padding: "10px 20px",
        background: "#578723",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px"
      }}>
        Back to Home
      </Link>

    </div>
  );
}

export default ThankYou;