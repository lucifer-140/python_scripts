import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Item from '../components/Item'
import Hero from '../components/Hero'
import Alert from '../components/Alert'

export default function Home() {
  return (
    <div className='bg-white dark:bg-[#171717]'>
      <div className="max-w-4xl mx-auto">
        <Head>
          <title>Python Scripts</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className='sticky top-0 z-10' >
          <Header />
        </div>
        <div className='z-30'>
          <Alert />
        </div>
        <Hero />
        <Item />
        <Footer />
      </div>
    </div>
  )
}