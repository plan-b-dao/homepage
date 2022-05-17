import { faDiscord, faGit, faGithub, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Social } from '../components/links'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Head>
        <title>Plan B - creating the future of DeFI</title>
        <meta name="description" content="Plan B is a open community, developing defi product and services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex items-center'>
          <div>
            <Image src="/PlanBLogo.png" width={125} height={125} alt='plan b logo'/>
          </div>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold'>Plan B</h1>
            <p>Website under construction, you can find us on social</p>
          </div>
        </div>
        <div>
          <nav className='flex space-x-4 justify-center'>
            <Social
              link="https://twitter.com/PlanBDAO"
              icon={faTwitter}
            />
            <Social
              link="https://discord.gg/4XvxugmejR"
              icon={faDiscord}
            />
            <Social
              link="https://medium.com/@planbdao"
              icon={faMedium}
            />
            <Social
              link="https://twitter.com/PlanBDAO"
              image={<Image src={"/assets/brands/juice_logo.png"} width={25} height={25} />}
            />
            <Social
              link="https://github.com/plan-b-dao"
              icon={faGithub}
            />
          </nav>
        </div>
      </main>
    </div>
  )
}

export default Home
