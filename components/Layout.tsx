import { faTwitter, faDiscord, faMedium, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'
import Link from 'next/link';
import { PrimaryButton } from './buttons';
import { Navigation, Social } from './links';

interface ILayoutProps {
    children: React.ReactNode
}


export const Layout: React.FC<ILayoutProps> = ({children}) => {

    return (
        <div>
            <header className='container mx-auto py-6 px-3 flex items-center text-dark-jungle'>
                <div className='flex'>
                    <Link href="/" >
                        <Image className='hover:cursor-pointer' src="/logo_plan_b_dao.png" width={45} height={45} alt='plan b logo' />
                    </Link>
                </div>
                <div className='ml-auto flex space-x-8 items-center'>
                    <nav className='space-x-8'>
                        <Navigation to="/">home</Navigation>
                        <Navigation to="/about">about</Navigation>
                        <Navigation to="/pledge">pledge</Navigation>
                    </nav>
                    <div>
                        <PrimaryButton link="https://app.planbdao.com">Launch App</PrimaryButton>
                    </div>
                </div>
            </header>
            {children}
            <footer className='container mx-auto hidden md:block'>
                <nav className='flex space-x-4 fixed bottom-4'>
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
                    link="https://www.reddit.com/r/planbdao/"
                    icon={faReddit}
                    />
                    <Social
                    link="https://github.com/plan-b-dao"
                    icon={faGithub}
                    />
                </nav>
            </footer>
        </div>
    );
}