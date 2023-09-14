import React, { useEffect, useState } from 'react';
import { useWallet, useAllWallets } from 'useink';
import Link from 'next/link';

export const ConnectWallet = ({ children }) => {
  const { account, connect, disconnect } = useWallet();
  const wallets = useAllWallets();
  const [shouldRender, setShouldRender] = useState(false);
  const polkadotWallet = wallets[2];
   
  useEffect(() => {
    const shouldRenderConnectWallet = true;
    setShouldRender(shouldRenderConnectWallet);
    console.log(wallets);
  }, []); 

  if (!shouldRender) {
    return null; 
  }
  
  if (!account) {
    return (
      <ul className='flex'>
       
          <li key={polkadotWallet.title}>
            {polkadotWallet.installed ? (
              <button  className=' border-2	border-white	rounded-full font-VT323 text-2xl text-white px-4 py-1' onClick={() => connect(polkadotWallet.extensionName)}>
                Connect Wallet
              </button>
              
            ) : (
              <a href={polkadotWallet.installUrl} >
                Install {polkadotWallet.title}
              </a>
            )}
          </li>
 
      </ul>
    );
  }

  return (
    <>
    

      <button className='border-2	border-white	rounded-full tracking-widest font-VT323 text-2xl text-white px-4 py-1' onClick={disconnect}>Disconnect Wallet</button>

    </>
  );
};

export default function Header() {
  return (
    <header className="flex z-50 w-full h-20 absolute top-0 bg-transparent">
      <div className="flex w-full justify-between items-end mx-8 pt-8 relative">
      <Link href="/mint"> <button className='border-2	border-white bg-white	rounded-full font-VT323 text-2xl text-black px-4 py-1' >Bring me to the coop !</button></Link>  
    
        <ConnectWallet />
      </div>
    </header>
  );
}
