import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../Pages/appointmentForm.css';
import doctor from "../assets/images/png-doctor.png";

function AppointmentForm() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
name:"",
phone:"",
email:"",
message:""
});

const [errors,setErrors] = useState({});
const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState("");

const handleChange = (e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});
};

const validateForm = ()=>{

let newErrors={};

if(!formData.name.trim()){
newErrors.name="Name is required";
}

if(!formData.phone){
newErrors.phone="Phone number required";
}
else if(!/^[0-9]{10}$/.test(formData.phone)){
newErrors.phone="Enter 10 digit phone number";
}

if(!formData.email){
newErrors.email="Email required";
}

if(!formData.message){
newErrors.message="Message required";
}

setErrors(newErrors);

return Object.keys(newErrors).length===0;

};

const handleSubmit = async(e)=>{

e.preventDefault();

if(!validateForm()) return;

setLoading(true);

try{

const response = await axios.post(
  "https://mern-backend-uqra.onrender.com/api/appointment",
  formData
);

if(response.data.success){

setSuccess("Appointment Submitted Successfully!");

setTimeout(()=>{
navigate("/thank-you");
},2000);

}

}catch(error){

alert("Something went wrong");

}

setLoading(false);

};

return(

<div className="appointment-wrapper">

<div className="appointment-card">

{/* LEFT SIDE FORM */}

<div className="form-section">

<h2>Book Appointment</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Enter Name"
value={formData.name}
onChange={handleChange}
/>
{errors.name && <p className="error">{errors.name}</p>}

<input
type="text"
name="phone"
placeholder="Enter Phone Number"
value={formData.phone}
onChange={handleChange}
/>
{errors.phone && <p className="error">{errors.phone}</p>}

<input
type="email"
name="email"
placeholder="Enter Email"
value={formData.email}
onChange={handleChange}
/>
{errors.email && <p className="error">{errors.email}</p>}

<textarea
name="message"
placeholder="Enter Message"
value={formData.message}
onChange={handleChange}
maxLength="30"
></textarea>
{errors.message && <p className="error">{errors.message}</p>}

<button type="submit" disabled={loading}>
{loading ? "Submitting..." : "Submit"}
</button>

</form>

</div>

{/* RIGHT SIDE IMAGE */}

<div className="image-section">

<img
src={doctor}
alt="doctor"
/>

</div>

</div>

</div>

);

}

export default AppointmentForm;