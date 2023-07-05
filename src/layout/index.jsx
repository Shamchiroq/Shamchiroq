import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Header/>
    <main className="xl:min-h-[80vh] md:min-h-[60vh] overflow-hidden"><Outlet/></main>
    <Footer/>
    </>
  )
}
