import React from "react";
import { MainContainer } from "./styles";
import { useDispatch } from 'react-redux';
import logo from "../../assets/logo.png";
import LoginNavbar from "../../layouts/navbar/login/navbar";
import { LoginContainer, LoginInput, LoginButton, LoginInfo } from "./styles";
import { useState } from "react";
import {loginUser} from '../../redux/user/user.action';
import { useNavigate } from 'react-router-dom'; // Eklenen import
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from '../../redux/user/user.action'
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(false);



  const sendAuthInfo = async()=>{
      try{
        let userCre = {email,password};
        const response = await dispatch(loginUser(userCre));
        localStorage.setItem("accessToken", response.payload.accessToken);
      
        dispatch(getCurrentUser());
        navigate('/feed');
      

      }catch(err){
        setError('Hatalı kullanıcı adı veya şifre');
        console.log(err);
      }
  }

  return (
    <MainContainer>
      <LoginNavbar></LoginNavbar>
      <LoginContainer>
        <h1>COMBINE EVRENİNE GİR</h1>
        <LoginInput
          type="email"
          placeholder="E-posta"
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />

        <h3>
          Giriş yaparak{" "}
          <a
            href="/kullanim-kosullari"
            style={{ textDecoration: "underline", color: "purple" }}
          >
            kullanım koşullarını
          </a>{" "}
          kabul ediyorum.
        </h3>
        <LoginButton onClick={sendAuthInfo}>giriş yap</LoginButton>
        <h5>
          Hesabınız yok mu? Bir projeye eşleşmek için hemen{" "}
          <a
            href="/signup"
            style={{ textDecoration: "underline", color: "purple" }}
          >
            kaydolun
          </a>
          .
        </h5>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
