import Head from 'next/head'
import Navbar from "./Navbar";
import Footer from './Footer'

export default function layout({children}){
    return(<>
    <Head>
        <link rel='shortcut icon' href='/images/favicon.ico'/>
        <title>Pokenext</title>    
    </Head>
      <Navbar/>
        <main className='main-container'>{children}</main>
      <Footer/>
    </>)
}