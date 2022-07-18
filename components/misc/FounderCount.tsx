import { PrimaryButton } from "../buttons";

interface IFounderCountProps {}

export const FounderCount: React.FC<IFounderCountProps> = () => {

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="text-cultured-dark text-[32px]">
                <span className="font-bold text-[64px] text-dark-jungle">199</span> / 1000
            </div>
            <div>
                <PrimaryButton type="gradient" link="https://app.planbdao.com/founder">Become Founder</PrimaryButton>
            </div>
        </div>
    );
}