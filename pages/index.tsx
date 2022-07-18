import type { NextPage } from 'next'
import Head from 'next/head'
import { FounderCount } from '../components/misc'
import { Achievement } from '../components/misc/Achievement'
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
          <div className='flex items-center flex-col xl:flex-row'>
            <div className='space-y-2 px-2 xl:w-1/2 text-center sm:text-left'>
              <h1 className='font-bold text-[46px] sm:text-h1'>Build for community</h1>
              <p className='text-[24px] font-playfair-display'>
                We are building an open community of investors, builders, and creators to build DeFi products and services. Our ultimate goal is to have crypto-tech hubs all around the world, where like-minded people can meet, discourse, build and learn.
              </p>
            </div>
            <div className='flex-1 mt-20 xl:mt-0'>
              <FounderCount />
            </div>
          </div>
          
        </Section>
        <Section>
          <div className='space-y-2 px-2 xl:w-1/2 ml-auto text-center sm:text-right'>
            <h1 className='font-bold text-[46px] sm:text-h1'>As a founder</h1>
            <p className='text-[24px] font-playfair-display '>
              you are getting the first updates, drops, early beta access and be a part of a new money revolution. You will get the first access to our Tree NFTs, Plan B DAO (ERC-20 Token), and our own cryptocurrency with a brand-new tokenomics.
            </p>
          </div>
        </Section>
        <Section>
          <h1 className='font-bold text-[46px] sm:text-[96px] text-dark-jungle uppercase text-center sm:text-left'>Road Map</h1>
        </Section>
        <Section className="mb-0 mt-52 sm:my-52">
          <div className='space-y-8 text-center p-6 my-2'>
            <div>
              <h5 className='text-[40px] font-bold'>Phase 1</h5>
            </div>
            <div>
              <p className='text-[24px] sm:w-1/2 mx-auto font-playfair-display'>
                Getting the first founders and release of the token, nft, plant of the first tree,  and release of white paper.
              </p>
            </div>
            <div className='space-y-8 my-2 mx-auto flex flex-col items-center'>
              <Achievement completed={false}>1000 Founders</Achievement>
              <Achievement completed={false}>Release of web3 application</Achievement>
              <Achievement completed={false}>First Tree Plant</Achievement>
              <Achievement completed={false}>White Paper Release</Achievement>
            </div>
          </div>
          <div className='space-y-8 text-center p-6 my-2'>
            <div>
              <h5 className='text-[40px] font-bold'>Phase 2</h5>
            </div>
            <div>
              <p className='text-[24px] sm:w-1/2 mx-auto font-playfair-display'>
                Release of the web3 application, community wallet, trees nft/coin, debt NFT.
              </p>
            </div>
            <div className='space-y-8 my-2 mx-auto flex flex-col items-center'>
              <Achievement completed={false}>Release Web3 Application</Achievement>
              <Achievement completed={false}>Community Wallet</Achievement>
              <Achievement completed={false}>Trees NFT/Coin</Achievement>
              <Achievement completed={false}>Debt NFT</Achievement>
            </div>
          </div>
          <div className='space-y-8 text-center p-6 my-2'>
            <div>
              <h5 className='text-[40px] font-bold'>Phase 3</h5>
            </div>
            <div>
              <p className='text-[24px] sm:w-1/2 mx-auto font-playfair-display'>
                Release of stable coin, first crypto hub center, and market analyser and reward system for community.
              </p>
            </div>
            <div className='space-y-8 my-2 mx-auto flex flex-col items-center'>
              <Achievement completed={false}>Crypto Fiat Coin</Achievement>
              <Achievement completed={false}>Crypto-hub center</Achievement>
              <Achievement completed={false}>Market Analyser</Achievement>
              <Achievement completed={false}>Reward System</Achievement>
            </div>
          </div>
          <div className='bg-gradient text-center py-32'>
            <h2 className='text-[46px] sm:text-[96px] text-cultured-light font-bold'>
              to be continued....
            </h2>
            <h4 className='text-[24px] text-cultured-light font-playfair-display'>
              find us on social to get newest updates.
            </h4>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Home
