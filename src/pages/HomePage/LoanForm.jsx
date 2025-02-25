import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./LoanForm.scss"; // Ensure correct import

const schema = yup.object().shape({
  product: yup.string().required("Please select a product"),
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  description: yup.string().required("Description is required"),
});

const LoanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-loan-form">
       <div style={{textAlign:"center", paddingTop:'100px', width:"70%", margin:"auto"}}>
          <h2 style={{fontSize:"60px", color:'white'}}>Find the Best Loan Offers for You!</h2>
          <p className="description">
            Get personalized loan and credit offers in minutes. Simply enter your details and receive tailored information with competitive rates.
          </p>
          </div >
      <div className="container_form">
        <div className="form-box">
         
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Select Product */}
            <div className="form-group">
              <label>Select Product</label>
              <select {...register("product")}>
                <option value="">Select</option>
                <option value="home-loan">Home Loan</option>
                <option value="car-loan">Car Loan</option>
              </select>
              <p className="error">{errors.product?.message}</p>
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" {...register("fullName")} placeholder="Full Name" />
              <p className="error">{errors.fullName?.message}</p>
            </div>

            {/* Email & Mobile Number */}
            <div className="form-group-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" {...register("email")} placeholder="Email" />
                <p className="error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" {...register("mobileNumber")} placeholder="Mobile Number" />
                <p className="error">{errors.mobileNumber?.message}</p>
              </div>
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description</label>
              <textarea {...register("description")} placeholder="Description"></textarea>
              <p className="error">{errors.description?.message}</p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanForm;
