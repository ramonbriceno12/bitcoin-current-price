import Cards from "../components/cards"
export default async function BitcoinData(){

    let data = []
    try {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        data = await res.json()
    } catch (error) {
        console.log('error', error)
    }


    return(
        <div>
            <Cards bitcoinData={data} />
        </div>
    )

}