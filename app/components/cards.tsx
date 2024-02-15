
import BitcoinData from "../lib/bitcoin-data"

export default async function Cards(
    {
        bitcoinData
    }){
    console.log(bitcoinData.bpi)
    return(
        <div>
            <div className="flex mb-4">
                <div className="w-full bg-gray-400 border-2 border-yellow-400">
                    <div className="w-1/3 bg-gray-400">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Time Updated</div>
                            <p className="text-white-700 text-base mb-4">
                                {bitcoinData.time.updated}
                            </p>
                            <div className="font-bold text-xl mb-2">Disclaimer</div>
                            <p className="text-white-700 text-base mb-4">
                                {bitcoinData.disclaimer}
                            </p>
                            <div className="font-bold text-xl mb-2">Coin</div>
                            <p className="text-white-700 text-base mb-4">
                                {bitcoinData.chartName}
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex mb-4">
                    <div className="w-1/3 border-2 border-yellow-400 bg-gray-400">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.USD.description}</div>
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.USD.code}</div>
                            <p className="text-white-700 text-base">
                                {bitcoinData.bpi.USD.rate}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 border-2 border-yellow-400 bg-gray-400">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.GBP.description}</div>
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.GBP.code}</div>
                            <p className="text-white-700 text-base">
                                {bitcoinData.bpi.GBP.rate}
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 border-2 border-yellow-400 bg-gray-400">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.EUR.description}</div>
                            <div className="font-bold text-xl mb-2">{bitcoinData.bpi.EUR.code}</div>
                            <p className="text-white-700 text-base">
                                {bitcoinData.bpi.EUR.rate}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
    )

}