import styled from "styled-components";

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
`;

export const CanvasWrapper = styled.section`
    width: 100%;    
    height: 100vh;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    background: #130F26;
`;

export const AboutWrapper = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const AboutTitleDivision = styled.div`
    width: 50%;
    height: 30%;
    margin-left: 8rem;
    font: 400 3rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;
`;

export const AboutTextDivision = styled.div`
    width: 50%;
    height: 30%;
    margin-left: 8rem;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;
    color: #FFA559;
`;

export const WorkWrapper = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
`;

export const WorkTitleDivision = styled.div`
    width: 50%;
    height: 20%;
    margin-left: 8rem;
    font: 400 3rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;
`;

export const WorkDivision = styled.div`
    width: 50%;
    height: 60%;
    margin-left: 8rem;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;
`;

export const Work = styled.article`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: .1rem solid #454545;
`;

export const WorkTitleBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: .5rem;
    font: 400 1.5rem/2rem 'Poppins', sans-serif;
    color: #f67e2b;
`;

export const WorkDescriptionBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font: 400 1rem/1.5rem 'Poppins', sans-serif;
    color: #FFA559;

    img {
        width: 1.2rem;
        filter: invert(1);
    }
`;

export const WorkEnterpriseBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
`;

export const WorkDateBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
`;

export const EducationWrapper = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const EducationTitleDivision = styled.div`
    width: 50%;
    height: 20%;
    margin-left: 8rem;
    font: 400 3rem/3rem 'Amatic SC', sans-serif;
    color: #FF6000;
`;

export const EducationDivision = styled.div`
    width: 50%;
    height: 60%;
    margin-left: 8rem;
    font: 400 1.125rem/1.625rem 'Poppins', sans-serif;
`;

export const Education = styled.article`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: .1rem solid #454545;
`;

export const EducationTitleBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding-bottom: .5rem;
    font: 400 1.5rem/2rem 'Poppins', sans-serif;
    color: #f67e2b;
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
        filter: invert(1);
    }
`;

export const EducationEnterpriseBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
`;

export const EducationDateBox = styled.div`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
`;