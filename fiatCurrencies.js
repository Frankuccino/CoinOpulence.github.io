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

// have an onclick function for the div to set the value of the params from the main endpoints to the uuid of it.
//<div role="option" class="option">
//  <span class="currencyName">US Dollar</span>
// <span class="currencySymbol">USD</span>
//</div>

// also update the placeholder value to it's sign ex. USD
function fiatCurrency() {
    const url = 'https://coinranking1.p.rapidapi.com/reference-currencies';
    const params = {
    'types[0]': 'fiat',
    limit: '200',
    };
    const headers = {
        'X-RapidAPI-Key': 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    };

    axios.get(url, { params, headers})
        .then(response => {
            const currencies = response.data.data.currencies;

            const menuDropdown = document.querySelector('.menu');

            currencies.forEach(currency => {
                const { uuid, name, symbol, sign } = currency;

                const option = document.createElement('div');
                option.classList.add('option');
                option.setAttribute('role', 'option');
                

                searchPlaceHolder = document.querySelector('.search');
                option.addEventListener('click', () => {
                    
                    currencyUuid = uuid;
                    currencySign = sign;
                    searchPlaceHolder.placeholder = symbol;

                    option.classList.add('activeCurrency');

                    recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, uuid, sign, offset)
                    fetchMarketData(uuid)
                    showModal(undefined, uuid)
                    // fetchChartData(undefined, undefined, undefined, uuid)
                });

                const currencyName = document.createElement('span'); 
                currencyName.classList.add('currencyName');
                currencyName.textContent = name;

                const currencySymbol = document.createElement('span');
                currencySymbol.classList.add('currencySymbol');
                currencySymbol.textContent = symbol;

                option.appendChild(currencyName);
                option.appendChild(currencySymbol);
                menuDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.log('Error occured', error);
        });
}

fiatCurrency();
// Assuming you have an input element with class "search"
const searchInput = document.querySelector('.search');

searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Get the entered search term in lowercase

  // Select all the currency options
  const currencyOptions = document.querySelectorAll('.option');

  currencyOptions.forEach((option) => {
    
    const currencyName = option.querySelector('.currencyName');
    const currencySymbol = option.querySelector('.currencySymbol');

    const name = currencyName.textContent.toLowerCase();
    const symbol = currencySymbol.textContent.toLowerCase();

    // Check if the search term matches the currency name or symbol
    if (name.includes(searchTerm) || symbol.includes(searchTerm)) {
        option.style.display = 'block'; 
        option.style.fontSize = '0.7em';
        option.style.display = 'flex';
        option.style.flexDirection = 'column';
        option.style.alignItems = 'flex-start';
        option.style.padding = '0.5em';
        option.style.cursor = 'pointer';
        option.addEventListener('click', () => {
                    
        searchInput.value = '';
        option.classList.add('activeCurrency');
    })
    } else {
      option.style.display = 'none'; // Hide the option if it doesn't match the search term
    }
  });
});

// need to add here and fix the search eventlistener where when if the search input is ''; it would just show all of the menu