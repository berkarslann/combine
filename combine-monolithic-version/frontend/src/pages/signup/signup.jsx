import {
  MainContainer,
  FirstHalfContainer,
  SecondHalfContainer,
  Question,
  Answer,
  AnswerContainer,
  NextButton,
  BackButton,
  FirstContentContainer,
  FadeInQuestion,
  SignUpForm,
  FormInputV1,
  FormInputV2,
} from "./styles";
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

import logofooter from "../../assets/logofooter.png";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../service/auth-service";
import { getCurrentUser } from "../../redux/user/user.action";
import { useNavigate } from "react-router-dom"; // Eklenen import

const SignUp = () => {
  const questions = [
    "1) Unvanınız nedir?",
    "2) Tecrübeniz nedir?",
    "3) Bir projede lider olmak ister misiniz?",
    "4) Eşleneceğiniz projeye haftada kaç saat ayırabilirsiniz?",
  ];
  const answers = [
    "Backend Developer, Frontend Developer, Fullstack Developer, Mobil Developer ",
    "Junior, Midlevel, Presenior, Senior",
    "Evet, Hayır",
    "0-3 saat, 3-6 saat, 6-9 saat",
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false); // State for animation
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
      setAnimate(true); // Enable animation
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
        setForm((prevForm) => {
          const updatedForm = { ...prevForm };
          updatedForm[arr[index]] = selectedAnswer;
          return updatedForm;
        });
        setAnimate(false); // Disable animation after transitioning
      }, 300); // Adjust the time according to your preferred animation duration
    }
  };

  const handleBackClick = () => {
    if (index > 0) {
      setAnimate(true); // Enable animation
      setTimeout(() => {
        setIndex((prevIndex) => prevIndex - 1);
        setSelectedAnswer(null);
        setForm((prevForm) => {
          const updatedForm = { ...prevForm };
          updatedForm[arr[index - 1]] = undefined; // or null, depending on your preference
          return updatedForm;
        });
        setAnimate(false); // Disable animation after transitioning
      }, 300); // Adjust the time according to your preferred animation duration
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form nesnesini kullanarak istediğiniz işlemleri gerçekleştirebilirsiniz
    console.log("Form submitted:", form);
  };

  const sendAuthInfo = async () => {
    try {
      const response = await dispatch(register(form));
      console.log(response)
      localStorage.setItem("accessToken", response.payload.accessToken);

      navigate("/feed");
    } catch (err) {
      setError("Hatalı kullanıcı adı veya şifre");
      console.log(err);
    }
  };

  return (
    <MainContainer>
      <FirstHalfContainer>
        <img src={logofooter} style={{ width: "20%" }} />
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
              <Question isActive={true}>Bilgilerinizi tamamlayın.</Question>
              <Question isActive={false} style={{ fontSize: "1.2rem" }}>
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
            fontFamily: ' "Outfit", sans-serif"',
            fontSize: "0.7rem",
          }}
        >
          Telif Hakkı © 2023 combine. Tüm Hakları Saklıdır.
        </div>
      </FirstHalfContainer>

      <SecondHalfContainer>
        {isLastQuestion ? (
          // Render SignUpForm component after the last question
          <SignUpForm onSubmit={sendAuthInfo}>
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
              value={form.firstName}
              onChange={handleInputChange}
            />
            <FormInputV1
              placeholder="Soyisim"
              name="surname"
              value={form.lastName}
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
            <label style={{ fontFamily: ' "Outfit", sans-serif"' }}>
              <input type="checkbox" />
              Kaydolarak kullanım koşullarını kabul ediyorum.
            </label>{" "}
            <NextButton>Kaydol</NextButton>
          </SignUpForm>
        ) : (
          // Render questions and answers for other cases
          <AnswerContainer>
            <div>
              {answers[index].split(",").map((item, idx) => (
                <Answer
                  key={idx}
                  onClick={() => handleAnswerClick(item)}
                  isSelected={selectedAnswer === item}
                >
                  {item}
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
