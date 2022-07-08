import { faTwitter, faDiscord, faMedium, faReddit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { PrimaryButton } from './buttons';
import { Navigation, Social } from './links';

interface ILayoutProps {
    children: React.ReactNode
}


export const Layout: React.FC<ILayoutProps> = ({children}) => {
    const [mobileNav, setMobileNav] = useState(false);

    return (
        <div>
            <header className={`container bg-cultured mx-auto fixed py-3 sm:py-6 px-3 flex items-center text-dark-jungle top-0 sm:relative ${mobileNav ? "bg-cultured-light" : ""}`}>
                <div className='flex'>
                    <Link href="/" >
                        <Image className='hover:cursor-pointer' src="/logo_plan_b_dao.png" width={45} height={45} alt='plan b logo' />
                    </Link>
                </div>
                <div className='ml-auto space-x-8 items-center hidden sm:flex z-20'>
                    <nav className='space-x-8'>
                        <Navigation to="/">home</Navigation>
                        <Navigation to="/about">about</Navigation>
                        <Navigation to="/pledge">pledge</Navigation>
                    </nav>
                    <div>
                        <PrimaryButton link="https://app.planbdao.com">Launch App</PrimaryButton>
                    </div>
                </div>
                <div className='ml-auto sm:hidden'>
                    <div className='p-1 bg-gradient rounded-full' onClick={() => setMobileNav(!mobileNav)}>
                        <div className={`p-2 ${mobileNav ? "bg-gradient" : "bg-cultured"} rounded-full`}>
                            <FontAwesomeIcon icon={mobileNav ? faClose : faBars} className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                {mobileNav &&
                    <div className='z-10 bg-cultured-light h-screen w-full absolute top-[90px] px-4 space-y-8 left-0 sm:hidden'>
                        <nav className='space-y-8 flex flex-col my-4'>
                            <Navigation to="/">home</Navigation>
                            <Navigation to="/about">about</Navigation>
                            <Navigation to="/pledge">pledge</Navigation>
                        </nav>
                        <div>
                            <PrimaryButton link="https://app.planbdao.com">Launch App</PrimaryButton>
                        </div>
                        <div>
                            <nav className='flex space-x-4'>
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
                        </div>
                    </div>
                }
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