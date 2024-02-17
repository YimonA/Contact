import React, { useEffect, useState } from "react";
import {
  ButtonComponents,
  ContainerComponents,
  FormComponents,
  PreventComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Login, Register } from "../service/auth.service";
import useApi from "../hook/useApi";

const LoginPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(Login);
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(()=>{
    if(data){
      nav('/home')
    }
  },[data])

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleDealApi(formData);
  };
  return (
    <>
          <PreventComponents fail="/home" check={localStorage.getItem("auth")}>
      <ContainerComponents>
        {loading ? (
          <LoadingComponents />
        ) : (
          <div className="Center">
            <div className="w-2/6 h-auto ">
              <h1 className="font-serif text-4xl text-center mb-10">
                Login Your Contact
              </h1>
              {error && <ErrorComponents>{error}</ErrorComponents>}
              <form className="space-y-7 mt-5" onSubmit={handleSubmit}>
                <FormComponents
                  value={formData.email}
                  onChange={handleInputChange}
                  name={"email"}
                  type={"email"}
                  label={"Enter Your Email"}
                  placeholder="example@gmail.com"
                />
                <FormComponents
                  value={formData.password}
                  onChange={handleInputChange}
                  name={"password"}
                  type={"password"}
                  label={"Password"}
                />
                <ButtonComponents style={"!rounded-lg"} type="submit">
                  Login
                </ButtonComponents>
              </form>
              <p className="mt-5">
                You haven't account pls Register{" "}
                <button
                  className="text-blue-400 underline"
                  onClick={() => nav("/register")}
                >
                  Register
                </button>
              </p>
            </div>
          </div>
        )}
      </ContainerComponents>
      </PreventComponents>
    </>
  );
};

export default LoginPage;
