const faqContent = document.querySelector('#faqContent')

const faq1 = document.querySelector('#f1');
const faq2 = document.querySelector('#f2');
const faq3 = document.querySelector('#f3');
const faq4 = document.querySelector('#f4');
const faq5 = document.querySelector('#f5');
const faq6 = document.querySelector('#f6');
const faq7 = document.querySelector('#f7');
const faq8 = document.querySelector('#f8');
const faq9 = document.querySelector('#f9');
const faq11 = document.querySelector('#f11');
const faq12 = document.querySelector('#f12');
const faq13 = document.querySelector('#f13');
const faq14 = document.querySelector('#f14');
const faq15 = document.querySelector('#f15');
const faq16 = document.querySelector('#f16');
const faq17 = document.querySelector('#f17');
// const faq18 = document.querySelector('#f18');
const faq19 = document.querySelector('#f19');
const faq20 = document.querySelector('#f20');
const faq21 = document.querySelector('#f21');
const faq22 = document.querySelector('#f22');
const faq23 = document.querySelector('#f23');
const faq24 = document.querySelector('#f24');
const faq25 = document.querySelector('#f25');
const faq26 = document.querySelector('#f26');
const faq27 = document.querySelector('#f27');

faq1.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is a cryptocurrency?';
    faqBody.innerText = 
    `A cryptocurrency is a digital currency that keeps records about balances and transactions on a distributed ledger, which is most commonly in the form of a blockchain. Cryptocurrencies enable peer-to-peer transactions between participants across the globe on a 24/7 basis. A distributed ledger is a database with no central administrator that is maintained by a network of nodes. In permissionless distributed ledgers, anyone is able to join the network and operate a node. In permissioned distributed ledgers, the ability to operate a node is reserved for a pre-approved group of entities. Top cryptocurrencies such as Bitcoin and Ethereum employ a permissionless design, in which anyone can participate in the process of establishing consensus regarding the current state of the ledger. This enables a high degree of decentralization and resiliency, making it very difficult for a single entity to arbitrarily change the history of transactions.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq2.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How does a cryptocurrency work?';
    faqBody.innerText = 
    `Cryptocurrency works through networks of nodes that are constantly communicating with each other to stay updated about the current state of the ledger. With permissionless cryptocurrencies, a node can be operated by anyone, provided they have the necessary technical knowledge, computer hardware and bandwidth.
    
    However, not all cryptocurrencies work in the same way. While all cryptocurrencies leverage cryptographic methods to some extent (hence the name), we can now find a number of different cryptocurrency designs that all have their own strengths and weaknesses.
    
    The two major categories of cryptocurrencies are Proof-of-Work and Proof-of-Stake. Proof-of-Work coins use mining, while Proof-of-Stake coins use staking to achieve consensus about the state of the ledger.
    
    In order to send and receive a cryptocurrency, you need a cryptocurrency wallet. A cryptocurrency wallet is software that manages private and public keys. In the case of Bitcoin, as long as you control the private key necessary to transact with your BTC, you can send your BTC to anyone in the world for any reason.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq3.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How are crypto prices calculated?';
    faqBody.innerText = 
    `Crypto prices are calculated by averaging cryptocurrency exchange rates on different cryptocurrency trading platforms. This way, we can determine an average price that reflects cryptocurrency market conditions as accurately as possible.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq4.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'Which is the best cryptocurrency?';
    faqBody.innerText = 
    `Bitcoin is the most popular cryptocurrency and enjoys the most adoption among both individuals and businesses. However, there are many different cryptocurrencies that all have their own advantages or disadvantages.

    If you value a highly secure and decentralized network above all, Bitcoin is probably your best bet. This is because the Bitcoin network consists of thousands of nodes spread geographically and is secured by a massive amount of computing power. On the other hand, if you require transactions to be very fast and cheap, Bitcoin is probably not the best choice due to the relative inefficiency of its Proof-of-Work design. In that case, you might want to consider using a cryptocurrency like XRP or Stellar Lumens instead. If you want to use decentralized applications and need smart contract functionality, a cryptocurrency such as Ethereum or EOS would be the best choice.
    
    The cryptocurrencies listed here are used as examples to illustrate the point that the best cryptocurrency depends on your specific requirements and use case.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq5.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'Who invented cryptocurrency?';
    faqBody.innerText = 
    `Cryptocurrency was invented by Satoshi Nakamoto, which is the pseudonym used by the inventor of Bitcoin. Even though digital currency concepts existed before Bitcoin, Satoshi Nakamoto was the first to create a peer-to-peer digital currency that reliably solved the issues facing previous digital money projects. Bitcoin was initially proposed in 2008 and launched in early 2009. Following the invention of Bitcoin, thousands of projects have attempted to imitate Bitcoin’s success or improve upon the original Bitcoin design by leveraging new technologies.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq6.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is the market cap of a cryptocurrency?';
    faqBody.innerText = 
    `Crypto market capitalization or "crypto market cap" for short is a widely used metric that is commonly used to compare the relative size of different cryptocurrencies. On CoinCodex, market cap is the default metric by which we rank cryptocurrencies on our frontpage. We also track the total cryptocurrency market cap by adding together the market cap of all the cryptocurrencies listed on CoinCodex. The total market cap provides an estimate on whether the cryptocurrency market as a whole is growing or declining.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq7.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How is crypto market cap calculated?';
    faqBody.innerText = 
    `We calculate a cryptocurrency’s market cap by taking the cryptocurrency’s price per unit and multiplying it with the cryptocurrency’s circulating supply. The formula is simple: Market Cap = Price * Circulating Supply. Circulating supply refers to the amount of units of a cryptocurrency that currently exist and can be transacted with.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq8.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'Does market cap matter in cryptocurrency?';
    faqBody.innerText = 
    `Crypto market cap matters because it is a useful way to compare different cryptocurrencies. If Coin A has a significantly higher market cap than Coin B, this tells us that Coin A is likely adopted more widely by individuals and businesses and valued higher by the market. On the other hand, it could potentially also be an indication that Coin B is undervalued relative to Coin A.

    Even though market cap is a widely used metric, it can sometimes be misleading. A good rule of thumb is that the usefulness of any given cryptocurrency’s market cap metric increases in proportion with the cryptocurrency’s trading volume. If a cryptocurrency is actively traded and has deep liquidity across many different exchanges, it becomes much harder for single actors to manipulate prices and create an unrealistic market cap for the cryptocurrency.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq9.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How can a cryptocurrency increase its market cap?';
    faqBody.innerText = 
    `A cryptocurrency’s market cap increases when its price per unit increases. Alternatively, an increase in circulating supply can also lead to an increase in market cap. However, an increase in supply also tends to lead to a lower price per unit, and the two cancel each other out to a large extent. In practice, an increase in price per unit is the main way in which a cryptocurrency’s market cap grows.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq11.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is cryptocurrency circulating supply?';
    faqBody.innerText = 
    `The circulating supply of a cryptocurrency is the amount of units that is currently available for use. Let’s use Bitcoin as an example. There is a rule in the Bitcoin code which says that only 21 million Bitcoins can ever be created. The circulating supply of Bitcoin started off at 0 but immediately started growing as new blocks were mined and new BTC coins were being created to reward the miners.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq12.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is an altcoin?'
    faqBody.innerText = 
    `An altcoin is any cryptocurrency that is not Bitcoin. The word "altcoin" is short for "alternative coin", and is commonly used by cryptocurrency investors and traders to refer to all coins other than Bitcoin. Thousands of altcoins have been created so far following Bitcoin’s launch in 2009.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq13.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is the difference between Bitcoin and altcoins?';
    faqBody.innerText = 
    `Bitcoin is the oldest and most established cryptocurrency, and has a market cap that is larger than all of the other cryptocurrencies combined. Bitcoin is also the most widely adopted cryptocurrency, and is accepted by practically all businesses that deal with cryptocurrency.

    However, Bitcoin is far from the only player in the game, and there are numerous altcoins that have reached multi-billion dollar valuations. The second largest cryptocurrency is Ethereum, which supports smart contracts and allows users to make highly complex decentralized applications. In fact, Ethereum has grown so large that the word "altcoin" is rarely used to describe it now.
    
    Generally, altcoins attempt to improve upon the basic design of Bitcoin by introducing technology that is absent from Bitcoin. This includes privacy technologies, different distributed ledger architectures and consensus mechanisms.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq14.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is a stablecoin?';
    faqBody.innerText = 
    `A stablecoin is a crypto asset that maintains a stable value regardless of market conditions. This is most commonly achieved by pegging the stablecoin to a specific fiat currency such as the US dollar. Stablecoins are useful because they can still be transacted on blockchain networks while avoiding the price volatility of "normal" cryptocurrencies such as Bitcoin and Ethereum. Outside of stablecoins, cryptocurrency prices can change rapidly, and it’s not uncommon to see the crypto market gain or lose more than 10% in a single day.

    Now, let’s provide a simple theoretical example of how the value of stablecoins actually stays stable.
    
    Let’s say that a company creates Stablecoin X (SCX), which is designed to trade as closely to $1 as possible at all times. The company will hold USD reserves equal to the number of SCX tokens in circulation, and will provide users the option to redeem 1 SCX token for $1. If the price of SCX is lower than $1, demand for SCX will increase because traders will buy it and redeem it for a profit. This will drive the price of SCX back towards $1.
    
    Tether’s USDT was the first stablecoin ever launched, and is still the most popular option on the market.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq15.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is DeFi?';
    faqBody.innerText = 
    `The term DeFi (decentralized finance) is used to refer to a wide variety of decentralized applications that enable financial services such as lending, borrowing and trading. DeFi applications are built on top of blockchain platforms such as Ethereum and allow anyone to access these financial services simply by using their cryptocurrency wallets.

    To give you a better idea of what kind of use cases are enabled by DeFi applications, let’s quickly go through some major DeFi apps and what they accomplish:
    
    Maker: Users can post their cryptocurrencies as collateral to receive a loan in the form of Dai stablecoins
    Compound: Users can borrow cryptocurrency or loan out their cryptocurrency to earn interest
    Uniswap: Users can swap between different Ethereum-based tokens in a decentralized manner
    dYdX: A decentralized platform where users can go long or short on cryptocurrencies`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq16.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What are the top 10 cryptocurrencies??';
    faqBody.innerText = 
    `The top 10 cryptocurrencies are ranked by their market capitalization. Even though 10 is an arbitrarily selected number, being in the top 10 by market capitalization is a sign that the cryptocurrency enjoys a lot of relevance in the crypto market. The crypto top 10 changes frequently because of the high volatility of crypto prices. Despite this, Bitcoin and Ethereum have been ranked #1 and #2, respectively, for several years now.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq17.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What cryptocurrency should I buy?';
    faqBody.innerText = 
    `If you want to invest in cryptocurrency, you should first do your own research on the cryptocurrency market. There are multiple factors that could influence your decision, including how long you intend to hold cryptocurrency, your risk appetite, financial standing, etc. It’s worth noting that most cryptocurrency investors hold Bitcoin, even if they are also investing in other cryptocurrencies. The reason why most cryptocurrency investors hold some BTC is that Bitcoin enjoys the reputation of being the most secure, stable and decentralized cryptocurrency.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq19.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is the difference between token and coin?';
    faqBody.innerText = 
    `The term DeFi (decentralized finance) is used to refer to a wide variety of decentralized applications that enable financial services such as lending, borrowing and trading. DeFi applications are built on top of blockchain platforms such as Ethereum and allow anyone to access these financial services simply by using their cryptocurrency wallets.

    To give you a better idea of what kind of use cases are enabled by DeFi applications, let’s quickly go through some major DeFi apps and what they accomplish:
    
    Maker: Users can post their cryptocurrencies as collateral to receive a loan in the form of Dai stablecoins
    Compound: Users can borrow cryptocurrency or loan out their cryptocurrency to earn interest
    Uniswap: Users can swap between different Ethereum-based tokens in a decentralized manner
    dYdX: A decentralized platform where users can go long or short on cryptocurrencies`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq20.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is blockchain and how is it connected with cryptocurrency?';
    faqBody.innerText = 
    `A blockchain is a type of distributed ledger that is useful for recording the transactions and balances of different participants. All transactions are stored in blocks, which are generated periodically and linked together with cryptographic methods. Once a block is added to the blockchain, data contained within it cannot be changed, unless all subsequent blocks are changed as well.

    A cryptocurrency wouldn’t be very useful if anyone could just change the history of transactions to their own liking - the point of cryptocurrency is that you can be sure that your coins belong to you only and that your balances will not change arbitrarily. This is why reaching consensus is of utmost importance. In Bitcoin, miners use their computer hardware to solve resource-intensive mathematical problems. The miner that reaches the correct solution first gets to add the next block to the Bitcoin blockchain, and receives a BTC reward in return.
    
    With a blockchain, it’s possible for participants from across the world to verify and agree on the current state of the ledger. Blockchain was invented by Satoshi Nakamoto for the purposes of Bitcoin. Other developers have expanded upon Satoshi Nakamoto’s idea and created new types of blockchains – in fact, blockchains also have several uses outside of cryptocurrencies.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq21.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is cryptocurrency/Bitcoin mining?';
    faqBody.innerText = 
    `Cryptocurrency mining is the process of adding new blocks to a blockchain and earning cryptocurrency rewards in return. Cryptocurrency miners use computer hardware to solve complex mathematical problems. These problems are very resource-intensive, resulting in heavy electricity consumption.

    The miner that provides the correct solution to the problem first gets to add the new block of transactions to the blockchain and receives a reward in return for their work. Bitcoin miners are rewarded with BTC, Ethereum miners are rewarded with ETH, and so forth.
    
    Cryptocurrencies such as Bitcoin feature an algorithm that adjusts the mining difficulty depending on how much computing power is being used to mine it. In other words – as more and more people and businesses start mining Bitcoin, mining Bitcoin becomes more difficult and resource-intensive. This feature is implemented so that the Bitcoin block time remains close to its 10 minute target and the supply of BTC follows a predictable curve.
    
    Cryptocurrencies that reach consensus through mining are referred to as Proof-of-Work coins. However, alternative designs such as Proof-of-Stake are used by some cryptocurrencies instead of mining.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq22.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How can I find historical crypto market cap and crypto price data?';
    faqBody.innerText = 
    `You can find historical crypto market cap and crypto price data on CoinCodex, a comprehensive platform for crypto charts and prices. After you find the cryptocurrency you’re interested in on CoinCodex, such as Bitcoin, head over to the "Historical" tab and you will be able to access a full overview of the coin’s price history. For any given coin, you will be able to select a custom time period, data frequency, and currency. The feature is free to use and you can also export the data if you want to analyze it further.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq23.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How many cryptocurrencies exist?';
    faqBody.innerText = 
    `There are thousands of different cryptocurrencies. On CoinCodex, you can find crypto prices for over 24850 cryptocurrencies, and we are listing new cryptocurrencies every single day.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq24.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is an ICO?';
    faqBody.innerText = 
    `ICO stands for Initial Coin Offering and refers to a method of raising capital for cryptocurrency and blockchain-related projects. Typically, a project will create a token and present their idea in a whitepaper. The project will then offer the tokens for sale to raise the capital necessary for funding development. Even though there have been many successful ICOs to date, investors need to be very careful if they are interested in purchasing tokens in an ICO. ICOs are largely unregulated, and very risky.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq25.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How is an IEO or STO different from an ICO?';
    faqBody.innerText = 
    `STOs and IEOs are alternative token sale models that emerged after ICOs started to fade in popularity.

    IEO stands for Initial Exchange Offering. IEOs share a lot of similarities with ICOs. They are both largely unregulated token sales, with the main difference being that ICOs are conducted by the projects that are selling the tokens, while IEOs are conducted through cryptocurrency exchanges. Cryptocurrency exchanges have an incentive to screen projects before they conduct a token sale for them, so the quality of IEOs tends to be better on average than the quality of ICOs.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq26.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'What is a cryptocurrency exchange?';
    faqBody.innerText = 
    `A cryptocurrency exchange is a platform that facilitates markets for cryptocurrency trading. Some examples of cryptocurrency exchanges include Binance, Bitstamp and Kraken. These platforms are designed to provide the best possible prices for both buyers and sellers. Some exchanges only offer cryptocurrency markets, while others also allow users to exchange between cryptocurrencies and fiat currencies such as the US dollar or the euro. You can buy and sell Bitcoin on practically all cryptocurrency exchanges, but some exchanges list hundreds of different cryptocurrencies. One metric that is important for comparing cryptocurrency exchanges is trading volume. If trading volume is high, your trades will execute fast and at predictable prices.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});

faq27.addEventListener('click', () =>{
    faqContent.innerHTML = '';
    const faqHead = document.createElement('h2') ;
    const faqBody = document.createElement('p');
    faqHead.innerText = 'How do I use the crypto charts on Coin.Opulence?';
    faqBody.innerText = 
    `Coin.Opulence provides all the data you need to stay informed about cryptocurrencies. You can find cryptocurrency charts for more than 24850 coins, and access key data such as up-to-date prices, all-time high price, cryptocurrency market cap, trading volume and more.`;

    faqContent.appendChild(faqHead);
    faqContent.appendChild(faqBody);
    return faqContent;
});