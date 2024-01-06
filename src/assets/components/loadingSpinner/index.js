import React from "react";

import * as S from "./style";

export default function index() {
  return (
    <S.SpinnerWrapper>
      <div className="spinner">
        <div className="spinner-border" role="status"></div>
      </div>
    </S.SpinnerWrapper>
  );
}
