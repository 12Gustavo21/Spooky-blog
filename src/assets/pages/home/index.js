import React from 'react';

//Components
import Layout from '../../components/layout';

//Apollo
import { useQuery } from '@apollo/client';

//Services
import HOME_QUERY from '../../services/querys/homeQuery';

//Styles
import * as S from './style';

export default function Home() {

    const { data, loading, error } = useQuery(HOME_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data);

    const { home } = data;

    return (
        <>
            <Layout>
                <S.Main>
                    <S.ContentWrapper>
                        <span>Hi 👋,</span>
                        <span>My name is </span>
                        <span className='gradient'>Gustavo Almeida</span>
                        <span>I'm a Front-end developer</span>
                    </S.ContentWrapper>
                    <S.ProfilePhotoWrapper>
                        <S.Border>
                            <img src={home.profilePhoto.url} alt="Profile" draggable="false" />
                        </S.Border>
                    </S.ProfilePhotoWrapper>
                </S.Main>
            </Layout>
        </>
    )
}
