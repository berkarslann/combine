import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../service/auth-service";
import {
  MainContainer,
  FirstHalfContainer,
  SecondHalfContainer,
  Question,
  Answer,
  AnswerContainer,
  NextButton,
  BackButton,
  SignUpForm,
  FormInputV1,
  FormInputV2,
} from "./styles";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import logofooter from "../../assets/logofooter.png";

const SignUp = () => {
  const questions = [
    "1) Unvanınız nedir?",
    "2) Tecrübeniz nedir?",
    "3) Bir projede lider olmak ister misiniz?",
    "4) Eşleneceğiniz projeye haftada kaç saat ayırabilirsiniz?",
  ];
  const answers = [
    "Backend Developer, Frontend Developer, Fullstack Developer, Mobil Developer",
    "Junior, Midlevel, Presenior, Senior",
    "Evet, Hayır",
    "0-3 saat, 3-6 saat, 6-9 saat",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const isLastQuestion = index === questions.length;
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleAnswerClick = (item) => {
    setSelectedAnswer(item);
  };

  const arr = ["title", "level", "leadership", "projectDedicate"];

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
        setForm((prevForm) => ({
          ...prevForm,
          [arr[index]]: selectedAnswer,
        }));
        setAnimate(false);
      }, 300);
    }
  };

  const handleBackClick = () => {
    if (index > 0) {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex - 1);
        setSelectedAnswer(null);
        setForm((prevForm) => ({
          ...prevForm,
          [arr[index - 1]]: undefined,
        }));
        setAnimate(false);
      }, 300);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      navigate("/login");
      const response = await dispatch(register(form));
      localStorage.setItem("accessToken", response.payload.accessToken);
      
    } catch (err) {
      setError("Hatalı kullanıcı adı veya şifre");
      console.log(err);
    }
  };
  

  return (
    <MainContainer>
      <FirstHalfContainer>
        <Link to="/">
          <img src={logofooter} style={{ width: "40%" }} alt="Logo" />
        </Link>
        {index > 0 && (
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <IoMdArrowRoundBack style={{ color: "#5f9739" }} />
            <BackButton onClick={handleBackClick}>Geri</BackButton>
          </div>
        )}
        <div>
          {index === questions.length ? (
            <div>
              <Question isActive>Bilgilerinizi tamamlayın.</Question>
              <Question style={{ fontSize: "1.2rem" }}>
                Sizi uygun projelere eşleyeceğiz.
              </Question>
            </div>
          ) : (
            questions.map((question, idx) => (
              <Question key={idx} isActive={idx === index}>
                {question}
              </Question>
            ))
          )}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontFamily: '"Outfit", sans-serif"',
            fontSize: "0.7rem",
          }}
        >
          Telif Hakkı © 2023 combine. Tüm Hakları Saklıdır.
        </div>
      </FirstHalfContainer>

      <SecondHalfContainer>
        {isLastQuestion ? (
          <SignUpForm onSubmit={handleSubmit}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCircleInfo
                style={{
                  width: "2rem",
                  height: "2rem",
                  margin: "0.6rem",
                  color: "#ADD8E6",
                }}
              />
              <h5 style={{ color: "#ADD8E6" }}>
                Harika! Şimdi sizin için bir hesap oluşturmak ve sizi sonraki
                adımlarda yönlendirmek için gerekli olan son detaylara
                ihtiyacımız var.
              </h5>
            </div>
            <FormInputV1
              placeholder="İsim"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
            <FormInputV1
              placeholder="Soyisim"
              name="surname"
              value={form.surname}
              onChange={handleInputChange}
            />
            <FormInputV2
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <FormInputV2
              placeholder="Şifre"
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
            <label style={{ fontFamily: '"Outfit", sans-serif"' }}>
              <input type="checkbox" />
              Kaydolarak kullanım koşullarını kabul ediyorum.
            </label>
            <NextButton type="submit">Kaydol</NextButton>
          </SignUpForm>
        ) : (
          <AnswerContainer>
            <div>
              {answers[index].split(",").map((item, idx) => (
                <Answer
                  key={idx}
                  onClick={() => handleAnswerClick(item.trim())}
                  isSelected={selectedAnswer === item.trim()}
                >
                  {item.trim()}
                </Answer>
              ))}
            </div>
            <NextButton onClick={handleNextClick}>İleri</NextButton>
          </AnswerContainer>
        )}
      </SecondHalfContainer>
    </MainContainer>
  );
};

export default SignUp;
