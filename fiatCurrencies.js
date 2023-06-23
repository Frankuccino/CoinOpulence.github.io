
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