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
            <S.Main>
            <BatComponent numberOfBats={10} />
            <S.ContentWrapper></S.ContentWrapper>
            </S.Main>
        </Layout>
        </>
    );
}
