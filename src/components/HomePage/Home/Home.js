import React from 'react';
import Spots from '../Spots/Spots';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavigationBar from '../NavigationBar/NavigationBar';
import Article from '../Article/Article';
import ContuctUs from '../ContuctUS/ContuctUs';

const Home = () => {
    return (
        <div >
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Spots></Spots>
            <Article></Article>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;