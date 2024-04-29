"use client";
import React, { useState } from "react";
import { signInWithPhoneNumber, getAuth, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import Image from "next/image";
import { app } from "@/components/firebase";
import { Link } from "@/i18n";

const auth = getAuth(app);
export default function adminLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isSentOTP, setIsSentOTP] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendOrVerifyOTP = async (e) => {
    e.preventDefault();
    if (!isSentOTP) {
      try {
        const confirmation = await signInWithPhoneNumber(auth, phoneNumber);
        setVerificationId(confirmation.verificationId);
        setIsSentOTP(true);
        alert("OTP sent successfully!");
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Error sending OTP. Please try again.");
      }
    } else {
      try {
        const credential = PhoneAuthProvider.credential(
          verificationId,
          verificationCode
        );
        await signInWithCredential(auth, credential);
        console.log("Login Successful");
        alert("Login successful!");
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("Error verifying OTP. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <h4 className="fw-bold text-center my-3">Login Here</h4>
      <div className="d-flex justify-content-center">
        <form
          className="row g-3 card my-2 p-2 col-md-6"
          style={{ backgroundColor: "lightblue" }}
          onSubmit={handleSendOrVerifyOTP}
        >
          <div className="row g-3 justify-content-center my-1">
            <div>
              <Image
                src="/img/image.png"
                alt=""
                width={45}
                height={40}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "70px",
                  height: "70px",
                }}
              />
            </div>
            <div className="col-sm-2">
              <label
                htmlFor="exampleInputPhoneNumber"
                className="fw-bold form-label py-2"
              >
                {isSentOTP ? "Verification Code" : "Phone Number"}
              </label>
            </div>
            <div className="col-sm-6">
              <input
                type={isSentOTP ? "text" : "tel"}
                className="form-control"
                id="exampleInputPhoneNumber"
                placeholder={isSentOTP ? "Enter the OTP" : "Enter your phone number"}
                value={isSentOTP ? verificationCode : phoneNumber}
                onChange={isSentOTP ? handleOTPChange : handlePhoneNumberChange}
              />
            </div>
          </div>
          <div className="buttons">
            <div className="d-flex flex-row mb-2 justify-content-center">
              <div className="p-2">
                <button type="submit" className="btn btn-primary px-3">
                  {isSentOTP ? "Verify OTP" : "Send OTP"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
