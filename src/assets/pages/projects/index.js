import React from "react";

//Components
import Layout from "../../components/layout";
import BatComponent from "../../components/bats";

//Styles
import * as S from "./style";

export default function index() {
    return (
        <>
        <Layout backgroundFooter="#060d11">
            <BatComponent numberOfBats={6} />
            <S.Main>
            <S.ContentWrapper></S.ContentWrapper>
            </S.Main>
        </Layout>
        </>
    );
}
