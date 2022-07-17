import { ReactNode } from "react";

interface ISectionProps {
    children: ReactNode
    className?: string
}

export const Section: React.FC<ISectionProps> =
    (props) => {
        const { children, className } = props;
        
        return (
            <div className={`items-center my-52 ${className ?? ""}`}>
                {children}
            </div>
        );
    }