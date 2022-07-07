import { ReactNode } from "react";

interface ISectionProps {
    children: ReactNode
}

export const Section: React.FC<ISectionProps> =
    (props) => {
        const { children } = props;
        
        return (
            <div className='items-center my-52'>
                {children}
            </div>
        );
    }