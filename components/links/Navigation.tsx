import Link from "next/link";
import { useRouter } from "next/router"
import { ReactNode } from "react";

interface INavigationProp {
    to: string
    children: ReactNode
    onClick?: () => void
}

export const Navigation: React.FC<INavigationProp> = (props) => {
    const {to, children, onClick} = props;
    const {asPath} = useRouter();
    const activeClass = asPath === to ? "font-bold" : "";
    const className = "hover:cursor-pointer text-dark-jungle hover:text-dark-jungle-light " + activeClass;

    return (
        <Link href={to}>
            <span className={className} onClick={onClick}>
                {children}
            </span>
        </Link>
    );
}