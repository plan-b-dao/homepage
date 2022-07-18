import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface IAchievementProp {
    children: ReactNode
    completed: boolean
}

export const Achievement: React.FC<IAchievementProp> = ({completed, children}) => {
    return (
        <div className="flex space-x-6 items-center">
            <div>
                {completed ? 
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-gradient rounded-full"><FontAwesomeIcon icon={faCheck} className="w-[15px] h-[17px] text-cultured-light" /></div> 
                : 
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-cultured-dark rounded-full"><FontAwesomeIcon icon={faCheck} className="w-[15px] h-[17px]" /></div>
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}