const searchForm = document.querySelector('#searchsection');
const tableBody = document.querySelector('.tableBody');
const showMore = document.querySelector('.buttonShowMore');

const coinArray = [];

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
            // Clear the existing content
            tableBody.innerHTML = '';
            coinArray.length = 0;
            showMore.style.display='none';
  
  const search = document.querySelector('#search');
  const searchTerm = search.value.trim()
  let url = 'https://coinranking1.p.rapidapi.com/search-suggestions';
  const apiKey = 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08';
  const params = {query: searchTerm}
  const headers = {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
  showPopup(`Searching for ${searchTerm} `);
  axios.get(url, {params, headers})
    .then (response => {
      const coins = response.data.data.coins;
  
        // Iterate over the coins and create table rows
        coins.forEach(coin => { 
  
          coinArray.push(coin.uuid);
          // console.log(coinArray);
        });
          for(let coinId of coinArray) {
            const url2 = `https://coinranking1.p.rapidapi.com/coin/${coinId}`;
            const params2 = {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
            };
            axios.get(url2, {params2, headers})
            .then (response => {
              const coinFind = response.data.data.coin;
              console.log(coinFind);

              const { uuid, rank, name, symbol, iconUrl, price, marketCap, change } = coinFind;
              const volume = coinFind['24hVolume'];
      
              // Create the table row element
              const row = document.createElement('tr');
      
              // Assign class name based on the coin's uuid
              row.classList.add(uuid);

              row.addEventListener('click', (event) => {
                // Check if the event target is the button for adding to favorites
                const isFavoritesButton = event.target.classList.contains('bi');
                if (!isFavoritesButton) {
                  showModal(uuid);
                  // fetchChartData(uuid);
                }
              });
      
              // Create the table cells
              const starCell = document.createElement('td');
              const starButton = document.createElement('button');
              starButton.setAttribute('onclick', 'highlightIcon(this)');
              const starIcon = document.createElement('i');
              starIcon.classList.add('bi', 'bi-star');
              starButton.appendChild(starIcon);
              starCell.appendChild(starButton);
      
              const rankCell = document.createElement('td');
              rankCell.textContent = rank;
      
              const nameCell = document.createElement('td');
              const nameImage = document.createElement('img');
              nameImage.src = iconUrl;
              nameImage.alt = `${symbol} icon`;
              const nameLink = document.createElement('a');
              nameLink.href = '#';
              nameLink.textContent = name;
              nameCell.appendChild(nameImage);
              nameCell.appendChild(nameLink);
              nameCell.innerHTML += ` <span>${symbol}</span>`;
      
              const priceCell = document.createElement('td');
              priceCell.classList.add('price');
              priceCell.textContent = `$${formatPrice(price)}`;
              // function for formatting the price to the table
              function formatPrice(price) {
                const parsedPrice = parseFloat(price);
                if (parsedPrice === 0) {
                  return '0';
                }
                const decimalDigits = Math.max(2, 2 - Math.floor(Math.log10(parsedPrice)));
                const formattedPrice = parsedPrice.toLocaleString('en-US', {
                  minimumFractionDigits: decimalDigits,
                  maximumFractionDigits: decimalDigits
                });
              
                return formattedPrice;
            }        

            const marketCapCell = document.createElement('td');
            marketCapCell.classList.add('marketCaptd');
            marketCapCell.textContent = `$${parseFloat(marketCap).toLocaleString('en-US')}`;
      
            const volumeCell = document.createElement('td');
            volumeCell.classList.add('vol24h');
            volumeCell.textContent = parseFloat(volume).toLocaleString('en-US');
      
            const changeCell = document.createElement('td');
            changeCell.classList.add('ch24h');
            changeCell.textContent = `${change}%`;
            // Create a function to add a class to make the color change using css
            if (parseFloat(change) < 0) {
              changeCell.classList.add('negative-change');
            } else {
              changeCell.classList.add('positive-change');
            }

              // Append the cells to the row
              row.appendChild(starCell);
              row.appendChild(rankCell);
              row.appendChild(nameCell);
              
            if (!priceHeader.classList.contains('hide')) {
              row.appendChild(priceCell);
            }
          
            if (!marketCapHeader.classList.contains('hide')) {
              row.appendChild(marketCapCell);
            }
            
            if (!vol24Header.classList.contains('hide')) {
              row.appendChild(volumeCell);
            }
              row.appendChild(changeCell);
      
              // Append the row to the table body
              tableBody.appendChild(row);
              adjustBodyHeight();
            });
        }
          })
          .catch(error => {
            console.error('An error occurred:', error);
          });
          })
        
// Added line 54 (eventListener) for the coin's modal. 
// Added classes for the td for the customize functionality Line 87, Line 105, Line 113.