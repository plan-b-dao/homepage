import type { NextPage } from 'next'
import Head from 'next/head'
import { FounderCount, MilestoneTable } from '../components/misc'
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
          <div className='flex relative items-center w-full sm:w-1/2 mx-auto text-center justify-center py-12' style={{transform: "rotate(-15deg)", zIndex: "-1"}}>
            <h1 className='text-[46px] xl:text-[96px] font-bold'>We BRRR our own <span className='uppercase bg-gradient px-6 rounded-2xl text-white shadow-2xl'>cash</span></h1>
          </div>
          <div className='text-right font-bold text-xs sm:text-base'>
            <h6>* more community, more cash for everyone!</h6>
          </div>
        </Section>
        <Section>
          <div className='w-full sm:w-1/2 mx-auto'>
            <div>
              <h1 className='text-[46px] sm:text-[96px] font-bold'>Time to decouple fiat from crypto.</h1>
            </div>
            <div>
              <p className=' font-playfair-display text-[26px] sm:text-[32px]'>
                Crypto should connect people, and make money easy, accessible, transparent, global, and better but seems like we are falling for the same tricks again. This is why <span className='uppercase font-bold font-poppins'>plan b</span> was founded, we know the system is rigged and we want to build fiat 2.0, an eco-system where ideas, builders, and communities can meet and build new types of wealth.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className='w-full h-screen bg-cover bg-ecosystem'>

          </div>
        </Section>
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
          <div className='space-y-2 px-2 mt-10 text-center sm:mt-0 sm:text-left'>
            <div className='sm:w-1/2'>
              <h1 className='font-bold text-[46px] sm:text-h1'>Founder Privlage</h1>
              <p className='text-[24px] font-playfair-display '>
                Your ETH is never lock away for good, inside the contract between you and plan b you have the rights to withdraw all or partial of your eth back as a founder. As you can see it on the table
              </p>
            </div>
            <div className='mx-auto xl:w-1/2'>
              <MilestoneTable />
            </div>
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
                Getting the first 1000 founders, white paper release, founder NFT, and start of 1 Million Tree pledge!
              </p>
            </div>
            <div className='space-y-8 my-2 mx-auto flex flex-col items-center'>
              <Achievement completed={false}>1000 Founders</Achievement>
              <Achievement completed={false}>White Paper Release</Achievement>
              <Achievement completed={false}>Founder NFT ( not tradable )</Achievement>
              <Achievement completed={false}>Start of 1 Million Tree Pledge</Achievement>
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
