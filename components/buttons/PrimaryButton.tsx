import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface IPrimaryButtonProps {
    children: React.ReactNode
    disabled?: boolean
    icon?: IconProp
    link?: string
}

export const PrimaryButton: React.FC<IPrimaryButtonProps> = (props) => {
    const {children, disabled = false, icon, link} = props;

    if (link) {
        return (
            <a href={link}>
                <button className="flex items-center bg-dark-jungle hover:bg-dark-jungle-light text-cultured-light px-4 py-2 rounded font-poppins font-bold">
                    {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
                </button>
            </a>
        )
        
    }

    return (
        <button className="flex items-center bg-dark-jungle hover:bg-dark-jungle-light text-cultured-light px-4 py-2 rounded font-poppins font-bold">
           {icon && <FontAwesomeIcon className='w-6 h-6 mr-2' icon={icon} />} {children}
        </button>
    );
}