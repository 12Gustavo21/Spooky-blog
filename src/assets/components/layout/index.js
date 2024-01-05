import React from 'react';

//Components
import Footer from '../footer';
import ToTopButton from '../goToTop';

//Helmet
import { Helmet } from 'react-helmet';

//User Location
import { useLocation } from 'react-router-dom';

export default function Index({ children, positionFooter, backgroundFooter }) {

    const SetTitle = () => {
        const path = useLocation().pathname;
        let location = '';
        const title = 'Spooky blog';

        if (path === '/') {
            location = 'Home'
        } else {
            location = path[1].toUpperCase() + path.slice(2)
        };

        return `${location} | ${title}`
    };

    return (
        <>
            <Helmet>
                <title>{SetTitle()}</title>
            </Helmet>
            {children}
            <ToTopButton />
            <Footer positionFooter={positionFooter} backgroundFooter={backgroundFooter} />
        </>
    )
}
