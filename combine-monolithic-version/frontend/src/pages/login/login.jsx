import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  LoginContainer,
  LoginInput,
  LoginButton,
} from "./styles";
import logo from "../../assets/logo.png";
import LoginNavbar from "../../layouts/navbar/login/navbar";
import { loginUser, getCurrentUser } from "../../redux/user/user.action";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const sendAuthInfo = async () => {
    try {
      let userCre = { email, password };
      const response = await dispatch(loginUser(userCre));
      localStorage.setItem("accessToken", response.payload.accessToken);
      dispatch(getCurrentUser());
      navigate("/feed");
    } catch (err) {
      setError("Hatalı kullanıcı adı veya şifre");
      setInputError(true);
      setTimeout(() => setInputError(false), 2000); // 2 saniye sonra hatayı sıfırla
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/feed");
    }
  }, [currentUser, navigate]);

  return (
    <MainContainer>
      <LoginNavbar />
      <LoginContainer>
        <h1>COMBINE EVRENİNE GİR</h1>
        <LoginInput
          type="email"
          placeholder="E-posta"
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderColor: inputError ? "red" : "" }}
        />
        <LoginInput
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderColor: inputError ? "red" : "" }}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
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
          <Link
            to="/signup"
            style={{ textDecoration: "underline", color: "purple" }}
          >
            kaydolun
          </Link>
          .
        </h5>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
