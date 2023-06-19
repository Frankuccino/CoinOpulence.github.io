// create the endpoint fetching the data from the fiat currencies api endpoint

//  create function for hiding the data if the input is not active or clicked by user

//  for each data being created user can scroll on the available fiat currencies and place the data on a variable that was globally declared.

//  have an onclick function for that storing the fiat currency being selected and update the placeholder, the reference uuid for every endpoint on the scripts.

// the default currency is used and have || operator so whenever the value of the globally declared variable is set it would update the table

// example data being 
                // "uuid": "yhjMzLPhuIDl",
                // "type": "fiat",
                // "iconUrl": "https://cdn.coinranking.com/kz6a7w6vF/usd.svg",
                // "name": "US Dollar",
                // "symbol": "USD",
                // "sign": "$"
// so I also have to globally declare the sign so I can use that for the elements fetchCoins td symbol being used, and when it is null just have it blank

// for the options or dropdown: have the name of the fiat and the symbol under the name like ex:
// US Dollar
// USD
//  $

// if the sign is null use the symbol intead like USD or just blank

// The key params for searching in the input can would be 'search' and the value would be the input of user
//  search: 'usd',

// have an onclick function for the div
//<div role="option" class="option">
    //  <span class="currencyName">US Dollar</span>
   // <span class="currencySymbol">USD</span>
//</div>