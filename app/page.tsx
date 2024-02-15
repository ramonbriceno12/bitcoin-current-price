import BitcoinData from "./lib/bitcoin-data";

export default function Home() {
  return (


    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <BitcoinData/> */}
      <div className="rounded overflow-hidden shadow-lg">
        
        <BitcoinData/>
        
      </div>
    </main>
  );
}
