import React, { useState } from "react";

//Components
import Layout from "../../components/layout";
import Loading from "../../components/loading";
import Ghost from "../../components/ghost";

//Pages
import Error from "../error";

//EmailJs
import emailjs from "@emailjs/browser";

//Apolo
import { useQuery } from "@apollo/client";

//Query
import CONTACT_QUERY from "../../services/querys/contactQuery";

//Style
import * as S from "./style";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <Layout positionFooter="absolute">
      <S.CanvasWrapper>
        <Ghost background={contact.background.url} />
      </S.CanvasWrapper>
      <S.Main>
        <S.ContentWrapper>
          <S.ContactWrapper>
            <S.TitleWrapper>
              <h1>{contact.title}</h1>
            </S.TitleWrapper>
            <S.DescriptionWrapper>
              <p
                dangerouslySetInnerHTML={{
                  __html: contact.description.text.replace(/\\n/g, ""),
                }}
              ></p>
            </S.DescriptionWrapper>
          </S.ContactWrapper>
          <S.Conatiner>
            <S.GhostContainer>
              <S.Ghost>
                <S.GhostFace class="ghost-face">
                  <div class="ghost-eyes">
                    <div class="ghost-eyes-l"></div>
                    <div class="ghost-eyes-r"></div>
                  </div>
                  <div class="ghost-mouth"></div>
                </S.GhostFace>
                <S.GhostTorso class="ghost-torso"></S.GhostTorso>
              </S.Ghost>
              <S.GhostHands class="ghost-hands">
                <div class="ghost-hands-l"></div>
                <div class="ghost-hands-r"></div>
              </S.GhostHands>
            </S.GhostContainer>
            <S.FormContact>
              <input
                className="input"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />

              <input
                className="input"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />

              <textarea
                className="textarea"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />

              <button className="button" type="submit" onClick={sendEmail}>
                <span>Send</span>
              </button>
            </S.FormContact>
          </S.Conatiner>
        </S.ContentWrapper>
      </S.Main>
    </Layout>
  );
}
