import React from "react";

//React router dom
import { Link } from "react-router-dom";

//Style
import * as S from "./style";

//Components
import Forest from "../../components/forest";

export default function index() {
  return (
    <>
      <S.Main>
        <S.Box>
          <div class="box_ghost">
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>

            <div class="box_ghost-container">
              <div class="box_ghost-eyes">
                <div class="box_eye left"></div>
                <div class="box_eye right"></div>
              </div>
              <div class="box_ghost-mouth"></div>
              <div class="box_ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="box_ghost-shadow"></div>
          </div>

          <div class="box_description">
            <div class="box_description-container">
              <div class="box_description-title">Whoops!</div>
              <div class="box_description-text">
                It seems like we couldn't find the page you were looking for
              </div>
            </div>
            <Link to="/" class="box_button">
              Go back
            </Link>
          </div>
        </S.Box>
        <Forest />
      </S.Main>
    </>
  );
}
