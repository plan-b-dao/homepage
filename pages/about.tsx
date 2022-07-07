import { Section } from "../components/primitives";

const About = () => {

    return (
        <main className="container mx-auto">
            <Section>
                <div className="w-1/2">
                    <h2 className='font-bold text-h1'>We are united in code!</h2>
                    <p className='text-[24px] font-playfair-display'>
                        We don’t follow names, we don’t care for your status, we are independed thinkers, builder, traders, volunteers who are united under a code.                     
                    </p>
                </div>
            </Section>
            <Section>
                <div className="w-1/2 ml-auto">
                    <h2 className='font-bold text-[48px]'>Modern Money Mechanics</h2>
                    <p className='text-[24px] font-playfair-display'>
                        are broken and corrupted. This is why we created <span className="font-bold">Plan B</span>, to procted us from the collapse of the fiat system. To have a place to protect our wealth from outside influence and manipulation and still be able to use money as we know.
                    </p>
                </div>
            </Section>
            <Section>
                <div className="w-1/2">
                    <h2 className='font-bold text-[48px]'>Better Money</h2>
                    <p className='text-[24px] font-playfair-display'>
                        Everyone should have access to the global wealth, not only banks, hedge funds, instituions and legacy financial system. Money should be easy, accessable, smart, upgradble and global. 
                    </p>
                </div>
            </Section>
            <Section>
                <div className="w-full bg-gradient p-12 text-cultured">
                    <h2 className='font-bold text-[64px] w-3/4'>
                        JOIN AND BE A PART OF THE CRYPTO REVOLUTION
                    </h2>
                </div>
            </Section>
        </main>
    );
}

export default About;