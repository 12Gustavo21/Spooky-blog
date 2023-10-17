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
                    <div>
                        <span>Hi, 👋</span>
                        <span>My name is </span>
                        <span>Gustavo Almeida</span>
                        <span>I'm a Front-end developer</span>
                    </div>
                    <div>
                        <img src={home.profilePhoto.url} alt="Profile" width={100}/>
                    </div>
                </S.Main>
            </Layout>
        </>
    )
}
