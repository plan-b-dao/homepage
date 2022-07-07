import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISocialProps {
    icon?: any
    link: string
    image?: React.ReactNode
}

export const Social: React.FC<ISocialProps> = ({icon, link, image}) => {

    return (
        <a href={link} target="_blank"  rel="noreferrer" className='p-2 hover:bg-gradient transition-all flex items-center rounded-full'>
            {image ? image : <FontAwesomeIcon className='w-6 h-6' icon={icon!}/> }
        </a>
    );
}