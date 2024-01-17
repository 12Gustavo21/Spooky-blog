import React, { useState, useEffect } from "react";

//Components
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import Ghost from "../../components/ghost";

//Pages
import Error from "../error500";

//EmailJs
import emailjs from "@emailjs/browser";

//Apolo
import { useQuery } from "@apollo/client";

//Query
import CONTACT_QUERY from "../../services/querys/contactQuery";

//Style
import * as S from "./style";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  const send = document.querySelector(".button");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const TemplateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_25casd9",
        "template_nuhxa4i",
        TemplateParams,
        "BVut-9PXSeNQWyNeY"
      )
      .then(
        (response) => {
          send.classList.add("success");
          console.log("SUCCESS!", response.status, response.text);
          alert("Your spooky message has been sent");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert(error.text);
          console.log("FAILED...", error);
        }
      );
  }

  const { data, loading, error } = useQuery(CONTACT_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { contact } = data;

  const handleFocus = () => {
    if (!focus) {
      setFocus(true);
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("row")) return;
    else {
      setFocus(false);
    }
  });

  return (
    <Layout backgroundFooter="#0b0b0b">
      <S.CanvasWrapper>
        <Ghost background={contact.background.url} />
      </S.CanvasWrapper>
      <S.Main>
        <S.ContentWrapper>
          <S.ContactWrapper>
            <S.TitleWrapper data-aos="fade-up" data-aos-duration="1500">
              <h1>{contact.title}</h1>
            </S.TitleWrapper>
            <S.DescriptionWrapper data-aos="fade-up" data-aos-duration="1750">
              <p
                dangerouslySetInnerHTML={{
                  __html: contact.description.text.replace(/\\n/g, ""),
                }}
              ></p>
            </S.DescriptionWrapper>
          </S.ContactWrapper>
          <S.Container>
            <S.GhostContainer>
              <S.Ghost onFocus={handleFocus} className={focus ? "focus" : ""}>
                <S.GhostFace className="ghost-face">
                  <div
                    onFocus={handleFocus}
                    className={`ghost-eyes ${focus ? "focus" : ""}`}
                  >
                    <div className="ghost-eyes-l"></div>
                    <div className="ghost-eyes-r"></div>
                  </div>
                  <div className="ghost-mouth"></div>
                </S.GhostFace>
                <S.GhostTorso
                  onFocus={handleFocus}
                  className={`ghost-torso ${focus ? "focus" : ""}`}
                ></S.GhostTorso>
                <S.GhostHands
                  onFocus={handleFocus}
                  className={`ghost-hands ${focus ? "focus" : ""}`}
                >
                  <div
                    onFocus={handleFocus}
                    className={`ghost-hands-l ${focus ? "focus" : ""}`}
                  ></div>
                  <div
                    onFocus={handleFocus}
                    className={`ghost-hands-r ${focus ? "focus" : ""}`}
                  ></div>
                </S.GhostHands>
              </S.Ghost>
            </S.GhostContainer>
            <S.FormContact>
              <input
                className="input row"
                type="text"
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                onFocus={handleFocus}
                required
              />

              <input
                className="input row"
                type="text"
                placeholder="Your most spooky email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onFocus={handleFocus}
                required
              />

              <textarea
                className="textarea row"
                placeholder="Tell me a spooky thing..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                onFocus={handleFocus}
                required
              />

              <button className="button" type="submit" onClick={sendEmail}>
                <span>Send</span>
              </button>
            </S.FormContact>
          </S.Container>
        </S.ContentWrapper>
      </S.Main>
    </Layout>
  );
}
