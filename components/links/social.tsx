import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISocialProps {
    icon?: any
    link: string
    image?: React.ReactNode
}

export const Social: React.FC<ISocialProps> = ({icon, link, image}) => {

    return (
        <a href={link} target="_blank" className='p-2 hover:bg-[#00FF19] transition-all flex items-center rounded-full'>
            {image ? image : <FontAwesomeIcon className='w-8 h-8' icon={icon!}/> }
        </a>
    );
}