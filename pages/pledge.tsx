import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { PrimaryButton } from "../components/buttons";
import { Section } from "../components/primitives";

const Pledge = () => {

    return (
        <main className="container mx-auto">
            <Section>
                <div className="text-center">
                    <h1 className='font-bold text-h1'>1 Million Tree Project</h1>
                    <p className='text-[24px] font-playfair-display'>
                        A society grows great when old men plant trees in whose shade they shall never sit.
                    </p>
                </div>
            </Section>
            <Section>
                <div className="text-center font-playfair-display">
                    <p className="text-[36px]">For every transaction, we pledge to plant <span className="font-bold">1 tree</span>.</p>
                    <p className="text-[36px]">Up to <span className="font-bold">1 million</span> trees all around the world.</p>
                </div>
            </Section>
            <Section>
                <div className="space-y-4 text-center">
                    <h6 className="font-playfair-display text-[36px]">transaction count</h6>
                    <span className="text-[128px] font-bold">1200</span>
                </div>
                <div className="space-y-4 text-center">
                    <h6 className="font-playfair-display text-[36px]">planted trees</h6>
                    <span className="text-[128px] font-bold">231</span>
                </div>
            </Section>
            <Section>
                <div className="space-y-4 text-center w-1/2 mx-auto">
                    <p className="font-playfair-display text-[36px]">
                        If you like to help this cause and contribute, you can find more information on our discord channel.
                    </p>
                    <div className="inline-block">
                        <PrimaryButton link="https://discord.gg/4XvxugmejR" icon={faDiscord}>Discord</PrimaryButton>
                    </div>
                    
                </div>
            </Section>
        </main>
    );
}

export default Pledge;