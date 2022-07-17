import Head from "next/head";
import { PrimaryButton } from "../components/buttons";
import { Section } from "../components/primitives";

const About = () => {

    return (
        <>
            <Head>
                <title>About | Plan B - Building better money for everyone, open and transparent.</title>
                <meta name="description" content="Learn more about Plan B ecosystem and our philanthropy projects." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container sm:mx-auto">
            <Section>
                <div className="w-full px-2 sm:w-1/2">
                    <h2 className='font-bold text-[48px]'>We are united under code!</h2>
                    <p className='text-[24px] font-playfair-display'>
                        We don’t follow names, we don’t care for your status, we are independed thinkers, builder, traders, volunteers who are united under a code.                     
                    </p>
                </div>
            </Section>
            <Section>
                <div className="w-full px-2 sm:w-1/2 sm:ml-auto">
                    <h2 className='font-bold text-[48px]'>Modern Money Mechanics</h2>
                    <p className='text-[24px] font-playfair-display'>
                        are broken and corrupted. This is why we created <span className="font-bold">Plan B</span>, to procted us from the collapse of the fiat system. To have a place to protect our wealth from outside influence and manipulation and still be able to use money as we know.
                    </p>
                </div>
            </Section>
            <Section>
                <div className="w-full px-2 sm:w-1/2">
                    <h2 className='font-bold text-[48px]'>Better Money</h2>
                    <p className='text-[24px] font-playfair-display'>
                        Everyone should have access to the global wealth, not only banks, hedge funds, instituions and legacy financial system. Money should be easy, accessable, smart, upgradble and global. 
                    </p>
                </div>
            </Section>
            <Section className="mb-0 mt-52 sm:my-52">
                <div className="w-full pl-10 bg-cover bg-philanthropy p-12 text-cultured">
                    <h2 className='font-bold  text-[46px] sm:text-[64px] w-3/4'>
                        JOIN AND BE A PART OF THE CRYPTO REVOLUTION
                    </h2>
                    <p className="text-[24px] font-playfair-display">
                        Find out more about our pledge and how our philanthropy program works with our native tokens, and how you can be a part of it! 
                    </p>
                    <div className="flex justify-center mt-10">
                        <PrimaryButton type="secondary" link="/pledge">read more</PrimaryButton>
                    </div>
                </div>
            </Section>
        </main>
        </>
        
    );
}

export default About;