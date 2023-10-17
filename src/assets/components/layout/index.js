import React from 'react';

//Components
import Header from '../header';
import Footer from '../footer';

export default function index({children}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
