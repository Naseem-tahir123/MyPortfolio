import React from 'react';
import Hero from '../components/Hero';
// In future we will import Skills and Projects components here
import Skills from '../components/Skills';


const Home = () => {
    return (
        <main>
            <Hero />
            <Skills />
            {/* <Projects /> */}
        </main>
    );
};

export default Home;