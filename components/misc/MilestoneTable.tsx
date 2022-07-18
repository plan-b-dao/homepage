interface IMilestoneTableProps {}

export const MilestoneTable: React.FC<IMilestoneTableProps> = (props) => {

    return (
        <div className="space-y-1 mt-20">
            <div className="bg-gradient font-bold flex px-2 py-3 text-cultured-light">
                <div>Milestone</div>
                <div className="ml-auto">Founder Privlage</div>
            </div>
            <div className="bg-cultured-dark flex px-2 py-3 text-dark-jungle font-playfair-display">
                <div><span className="font-bold">Milestone 0:</span> Project Bootstrap</div>
                <div className="ml-auto">1 ETH</div>
            </div>
            <div className="bg-cultured-dark flex px-2 py-3 text-dark-jungle font-playfair-display">
                <div><span className="font-bold">Milestone 1:</span> Plan B Dao Token and creating Uniswap liquidty</div>
                <div className="ml-auto">0.85 ETH</div>
            </div>
            <div className="bg-cultured-dark flex px-2 py-3 text-dark-jungle font-playfair-display">
                <div><span className="font-bold">Milestone 2:</span> Application release and Trees NFTs </div>
                <div className="ml-auto">0.70 ETH</div>
            </div>
            <div className="bg-cultured-dark flex px-2 py-3 text-dark-jungle font-playfair-display">
                <div><span className="font-bold">Milestone 3:</span> Plan B Coin with custome swap and tokenomics</div>
                <div className="ml-auto">0.40 ETH</div>
            </div>
            <div className="bg-cultured-dark flex px-2 py-3 text-dark-jungle font-playfair-display">
                <div><span className="font-bold">Milestone 4:</span> Stable Coin and First Crypto-hub Center</div>
                <div className="ml-auto">0 ETH</div>
            </div>
        </div>
    );
}