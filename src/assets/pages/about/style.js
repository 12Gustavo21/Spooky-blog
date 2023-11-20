import styled from "styled-components";

//Assets
import darkForest from '../../img/dark-forest.png';

/*
    Palette:
    #454545
    #FF6000
    #FFA559
    #f67e2b
    #130F26
*/

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: url(${darkForest}) no-repeat center/cover;
    position: relative;
    z-index: 0;

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(1, 1, 1, 0.5);
        z-index: 1;
    }
`;

export const CanvasWrapper = styled.section`
    width: 100%;    
    min-height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
    overflow: hidden;
`;

export const ContentWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 8rem;
`;

export const AboutWrapper = styled.section`
    width: 90%;
    min-height: 30vh;
    margin-left: 8rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    position: relative;
    z-index: 2;

    @media only screen and (width <= 1280px) {
        margin-left: 3rem;
    }

    @media only screen and (width <= 500px) {
        margin-left: 1rem;
    }
`;

export const AboutTitleDivision = styled.div`
    width: 50%;
    height: 50%;
    font: 400 4rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;

    @media only screen and (width <= 850px) {
        font-size: 3rem;
    }

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const AboutTextDivision = styled.div`
    width: 75%;
    height: 50%;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;
    color: #FFA559;
    word-break: break-word;

    @media only screen and (width <= 1350px) {
        width: 90%;
    }

    @media only screen and (width <= 850px) {
        font-size: 1rem;
    }
`;

export const WorkWrapper = styled.section`
    width: 90%;
    min-height: 30vh;
    margin-left: 8rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;

    @media only screen and (width <= 1280px) {
        margin-left: 3rem;
    }

    @media only screen and (width <= 500px) {
        margin-left: 1rem;
    }
`;

export const WorkTitleDivision = styled.div`
    width: 50%;
    height: 20%;
    font: 400 3rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;

    @media only screen and (width <= 850px) {
        font-size: 2rem;
    }

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const WorkDivision = styled.div`
    width: 50%;
    height: 60%;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;

    @media only screen and (width <= 1350px) {
        width: 90%;
    }

    @media only screen and (width <= 850px) {
        font-size: 1rem;
    }
`;

export const Work = styled.article`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    border-bottom: .1rem solid #454545;
`;

export const WorkTitleBox = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1.2rem 0;
    font: 400 1.5rem/2rem 'Poppins', sans-serif;
    color: #f67e2b;

    @media only screen and (width <= 850px) {
        font-size: 1rem;
    }

    @media only screen and (width <= 768px) {
        margin: .2rem 0;
    }
`;

export const WorkDescriptionBox = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font: 400 1rem/1.5rem 'Poppins', sans-serif;
    color: #FFA559;

    img {
        width: 1.2rem;
    }

    @media only screen and (width <= 850px) {
        font-size: .9rem;
    }

    @media only screen and (width <= 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .5rem;
    }

    @media only screen and (width <= 375px) {
        font-size: .83rem;
    }
`;

export const WorkEnterpriseBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const WorkDateBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const EducationWrapper = styled.section`
    width: 90%;
    min-height: 50vh;
    margin-left: 8rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    z-index: 2;

    @media only screen and (width <= 1280px) {
        margin-left: 3rem;
    }

    @media only screen and (width <= 500px) {
        margin-left: 1rem;
    }
`;

export const EducationTitleDivision = styled.div`
    width: 50%;
    height: 20%;
    font: 400 3rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;

    @media only screen and (width <= 850px) {
        font-size: 2rem;
    }

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const EducationDivision = styled.div`
    width: 50%;
    height: 60%;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;

    @media only screen and (width <= 1350px) {
        width: 90%;
    }

    @media only screen and (width <= 850px) {
        font-size: 1rem;
    }
`;

export const Education = styled.article`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 1rem;
    border-bottom: .1rem solid #454545;
`;

export const EducationTitleBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin: 1.2rem 0;
    font: 400 1.5rem/2rem 'Poppins', sans-serif;
    color: #f67e2b;

    @media only screen and (width <= 850px) {
        font-size: 1rem;
    }

    @media only screen and (width <= 768px) {
        margin: .2rem 0;
    }
`;

export const EducationDescriptionBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font: 400 1rem/1.5rem 'Poppins', sans-serif;
    color: #FFA559;

    img {
        width: 1.2rem;
    }

    @media only screen and (width <= 850px) {
        font-size: .9rem;
    }

    @media only screen and (width <= 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: .5rem;
    }

    @media only screen and (width <= 375px) {
        font-size: .83rem;
    }
`;

export const EducationEnterpriseBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;

export const EducationDateBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;

    @media only screen and (width <= 768px) {
        width: 100%;
    }
`;