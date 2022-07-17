import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../components/primitives'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plan B - creating the future of DeFI</title>
        <meta name="description" content="Plan B is a open community, developing defi product and services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='mx-auto container'>
        <Section>
          <div className='space-y-2 px-2 xl:w-1/2'>
            <h1 className='font-bold text-[46px] sm:text-h1'>Build for community</h1>
            <p className='text-[24px] font-playfair-display'>
              We are building an open community of investors, builders, and creators to build DeFi products and services. Our ultimate goal is to have crypto-tech hubs all around the world, where like-minded people can meet, discourse, build and learn.
            </p>
          </div>
        </Section>
        <Section>
          <div className='space-y-2 px-2 xl:w-1/2 ml-auto text-right'>
            <h1 className='font-bold text-[46px] sm:text-h1'>As a founder</h1>
            <p className='text-[24px] font-playfair-display text-right'>
              you are getting the first updates, drops, early beta access and be a part of a new money revolution. You will get the first access to our Tree NFTs, Plan B DAO (ERC-20 Token), and our own cryptocurrency with a brand-new tokenomics.
            </p>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Home
