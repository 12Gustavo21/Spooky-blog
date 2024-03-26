import React, { useState, useEffect } from "react";

//User location
import { useLocation } from "react-router-dom";

//Styles
import * as S from "./style";

export default function Friend() {
  const [clicked, setClicked] = useState(
    localStorage.getItem("clicked") === "true"
  );

  const [message, setMessage] = useState(
    localStorage.getItem("clicked") === "true" ? "I'm here to help you!" : ""
  );

  const location = useLocation();

  useEffect(() => {
    setClicked(false);
  }, [location]);

  useEffect(() => {
    localStorage.setItem("clicked", clicked);
  }, [clicked]);

  const getLocation = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "home";
      case "/about":
        return "about";
      case "/techStack":
        return "techStack";
      case "/projects":
        return "projects";
      case "/contact":
        return "contact";
      default:
        return "error";
    }
  };

  const messageHandler = () => {
    if (!clicked) {
      if (getLocation() === "home") {
        setMessage("Oh, hi there!");
        setTimeout(() => {
          setMessage("My name is Spoo!");
        }, 4000);
        setTimeout(() => {
          setMessage("I'm here to help you!");
        }, 6000);
        setTimeout(() => {
          setMessage("To navigate at home is easy!");
        }, 8000);
        setTimeout(() => {
          setMessage("For example, you can click on the links above!");
        }, 10000);
        setTimeout(() => {
          setMessage("Put the music on, and enjoy!");
        }, 12000);
      } else if (getLocation() === "about") {
        setMessage("This is the about page!");
        setTimeout(() => {
          setMessage("Here you can find some information about Gustavo!");
        }, 4000);
        setTimeout(() => {
          setMessage("He is a web developer!");
        }, 6000);
        setTimeout(() => {
          setMessage("He loves to code!");
        }, 8000);
      } else if (getLocation() === "techStack") {
        setMessage("This is the tech stack page!");
        setTimeout(() => {
          setMessage("Here you can find the technologies that Gustavo uses!");
        }, 4000);
        setTimeout(() => {
          setMessage("He loves to use React!");
        }, 6000);
        setTimeout(() => {
          setMessage("He also loves to use styled-components!");
        }, 8000);
      } else if (getLocation() === "projects") {
        setMessage("This is the projects page!");
        setTimeout(() => {
          setMessage("Here you can find some of Gustavo's projects!");
        }, 4000);
        setTimeout(() => {
          setMessage("He loves to create new things!");
        }, 6000);
        setTimeout(() => {
          setMessage("He is always learning new things!");
        }, 8000);
      } else if (getLocation() === "contact") {
        setMessage("This is the contact page!");
        setTimeout(() => {
          setMessage("Here you can find a way to contact Gustavo!");
        }, 4000);
        setTimeout(() => {
          setMessage("He loves to talk with new people!");
        }, 6000);
        setTimeout(() => {
          setMessage("He is always open to new opportunities!");
        }, 8000);
      }
    }
  };

  const handleClick = () => {
    setClicked(!clicked);
    messageHandler();
  };

  return (
    <>
      <S.FriendMessage clicked={clicked} className={getLocation()}>
        <S.FriendMessageText>{message}</S.FriendMessageText>
      </S.FriendMessage>
      <S.FriendContainer onClick={handleClick} clicked={clicked}>
        <S.Friend>
          <S.FriendEyeWrapper>
            <S.FriendEyes clicked={clicked} />
            <S.FriendEyes />
          </S.FriendEyeWrapper>
          <S.FriendMouth clicked={clicked} />
        </S.Friend>
      </S.FriendContainer>
    </>
  );
}
