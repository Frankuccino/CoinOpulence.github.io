function adjustBodyHeight() {
    const table = document.querySelector('.tableBody');
    const tableHeight = table.offsetHeight;
    document.body.style.minHeight = `${tableHeight}px`;
    document.documentElement.style.setProperty('--bggradient', 'linear-gradient(to bottom, #0E6148, #003122)');
  }
  
// Function for fetching market data
function fetchMarketData(currencyUuid = 'yhjMzLPhuIDl') {
// Make the API request
fetch(`https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=${currencyUuid}`, {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': `${apiKey}`,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(data => {
    // Extract the necessary market data from the API response
    const { totalCoins, totalMarketCap, total24hVolume, btcDominance } = data.data;

    // Append the market data to the corresponding HTML elements
    const marketCapElement = document.querySelector('.marketCapTh');
    let displayLongValueMarketCap = false;
    updateMarketCap();

    marketCapElement.addEventListener('click', toggleValueDisplayMarketCap);
    function toggleValueDisplayMarketCap() {
      displayLongValueMarketCap = !displayLongValueMarketCap;
      updateMarketCap();
    }
    
    function updateMarketCap() {
      const formattedMarketCap = displayLongValueMarketCap ? parseFloat(totalMarketCap).toLocaleString('en-US'): formatMarketCap(totalMarketCap);
      marketCapElement.textContent = `${currencySign || ''}${formattedMarketCap}`;
    }

    function formatMarketCap(marketCap) {
      const suffixes = ['', 'K', 'M', 'B', 'T'];
      let suffixIndex = 0;

      while (marketCap >= 1000 && suffixIndex < suffixes.length - 1) {
        marketCap /= 1000;
        suffixIndex++;
      }
      return `${marketCap.toFixed(2)} ${suffixes[suffixIndex]}`;
    }
// above codes if for the market cap toggable long format 

    const tradingVolumeElement = document.querySelector('.tradingVolume');
    let displayLongValue = false;
    updateVolume();

    tradingVolumeElement.addEventListener('click', toggleValueDisplay);
    function toggleValueDisplay() {
      displayLongValue = !displayLongValue;
      updateVolume();
    }

    function updateVolume() {
      // total24hVolume.toLocaleString(undefined, { maximumFractionDigits: 2 })
      const formattedVolume = displayLongValue ? parseFloat(totalMarketCap).toLocaleString('en-US') : formatVolume(total24hVolume);
      tradingVolumeElement.textContent = `${currencySign || ''}${formattedVolume}`;
    }

    function formatVolume(volume) {
      const suffixes = ['', 'K', 'M', 'B', 'T'];
      let suffixIndex = 0;

      while (volume >= 1000 && suffixIndex < suffixes.length - 1) {
        volume /= 1000;
        suffixIndex++;
      }
      return `${volume.toFixed(2)} ${suffixes[suffixIndex]}`;
    }
// above functions is to make the market data for volume toggable to long format or simplified

    document.querySelector('.btcDominance').textContent = `${btcDominance.toFixed(1)}%`;
    document.querySelector('.allCoins').textContent = `${totalCoins}`;
})
.catch(error => {
    console.error('Error fetching market data:', error);
});
}


const tableHeadRow = document.querySelector('.tableHeadRow');
// Function to add the sticky background color
function addStickyBgColor() {
tableHeadRow.classList.add('sticky-bg');
}

// Function to remove the sticky background color
function removeStickyBgColor() {
tableHeadRow.classList.remove('sticky-bg');
}
// Scroll event listener
window.addEventListener('scroll', function() {
// Get the current scroll position
const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

// Define the threshold scroll position where the background color should be added
const threshold = 100; // Adjust the value as per your needs

// Determine whether to add or remove the sticky background color based on the scroll position
if (scrollPosition > threshold) {
addStickyBgColor();
} else {
removeStickyBgColor();
}
});


const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', () => {
  // Call the fetchCoins function with the desired parameters
  showPopup("Data is reloading...");
  fetchCoins(undefined, undefined, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  // recentSortedTable();
  fetchMarketData(currencyUuid);
});


const apiKey = 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08';

// Function for displaying coins
  function fetchCoins(limit = 50 , offset, timePeriod = '24h', orderBy = 'marketCap', orderDirection = 'desc', currencyUuid, currencySign = '$' ) {
    const url = 'https://coinranking1.p.rapidapi.com/coins';
    const params = {
      referenceCurrencyUuid: currencyUuid,
      timePeriod: timePeriod,
      'tiers[0]': '1', 
      orderBy: orderBy,
      orderDirection: orderDirection,
      limit: limit,
      offset: offset
    };
    const headers = {
      'X-RapidAPI-Key': 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    };
  
    // Make the API request using Axios
    axios.get(url, { params, headers })
      .then(response => {
        const coins = response.data.data.coins;
        
        // Get the table body element
        const tableBody = document.querySelector('.tableBody');
  
        // Clear the existing content
        tableBody.innerHTML = '';
  
        // Iterate over the coins and create table rows
        coins.forEach(coin => {
          const { uuid, rank, name, symbol, iconUrl, price, marketCap, change } = coin;
          const volume = coin['24hVolume']; 
          

          // Create the table row element
          const row = document.createElement('tr');
          row.setAttribute('data-uuid', uuid);
          // Assign class name based on the coin's uuid
          row.classList.add(uuid);
          // row.addEventListener('click', () => showModal(uuid));
          row.addEventListener('click', (event) => {
            // Check if the event target is the button for adding to favorites
            const isFavoritesButton = event.target.classList.contains('bi');
            if (!isFavoritesButton) {
              showModal(uuid, currencyUuid);
              // fetchChartData(uuid);
            }
          });

          
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
          priceCell.textContent = `${currencySign || ''}${formatPrice(price)}`;
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
        marketCapCell.textContent = `${currencySign || ''}${parseFloat(marketCap).toLocaleString('en-US')}`;
  
        const volumeCell = document.createElement('td');
        volumeCell.classList.add('vol24h');
        volumeCell.textContent = `${currencySign || ''}${parseFloat(volume).toLocaleString('en-US')}`;
  
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

      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }
fetchCoins(50);

const page1 = document.querySelector('.pageN1');
const page2 = document.querySelector('.pageN2');
const page3 = document.querySelector('.pageN3');
const page4 = document.querySelector('.pageN4');
const page5 = document.querySelector('.pageN5');
const currentPageN = document.querySelector('.currentPage');

const showMoreButton = document.getElementById('showMoreButton');
showMoreButton.addEventListener('click', () => {
    offset += limit; // Increment the offset by the limit value
    // fetchCoins(limit, offset);
    // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
    recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
  });

page1.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  page1.classList.add('currentPage');
  offset = 0;
  // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page2.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  page2.classList.add('currentPage');
  offset = 50;
  // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page3.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  page3.classList.add('currentPage');
  offset = 100;
  // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page4.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  page4.classList.add('currentPage');
  offset = 150;
  // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page5.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  page5.classList.add('currentPage');
  offset = 200;
  // fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})



const showMoreButton_1 = document.getElementById('showMoreButton-1');
showMoreButton_1.addEventListener('click', () => {
offset -= limit; // Increment the offset by the limit value

fetchCoins(limit, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
});

// Function for displaying the popup message
function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');
  popupText.textContent = message;
  popup.style.display = 'block';

  // Hide the popup after a certain duration
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000); // Adjust the duration as needed (in milliseconds)
}

const backToTopButton = document.getElementById('backToTopButton');
// Function to handle the scroll event
function handleScroll() {
  if (window.pageYOffset > 100) {
    // Show the back to top button if scrolled down
    backToTopButton.classList.add('show');
  } else {
    // Hide the back to top button if at the top of the page
    backToTopButton.classList.remove('show');
  }
}

function scrollToTop() {
  const scrollDuration = 400; // Duration of the scroll animation in milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15); // Amount to scroll on each animation frame

  const scrollAnimation = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollAnimation);
    }
  }, 15);
}
// Add scroll event listener
window.addEventListener('scroll', handleScroll);
// Add click event listener to back to top button
backToTopButton.addEventListener('click', scrollToTop);
 

// Create an event listener for every table head to sort the data with the use of the parameter of the main function as argument 
// to make the header toggleable and sort it in asc or desc.
const priceHeader = document.querySelector('.obPrice');
const marketCapHeader = document.querySelector('.obMarketCap');
const volumeHeader = document.querySelector('.obVolume');
const changeHeader = document.querySelector('.obChange');

function toggleSortDirection(sortIcon) {
  const isDescending = sortIcon.classList.contains('bi-caret-down-fill');
  const otherHeaders = document.querySelectorAll('.sortIcon');

  // Remove existing icon classes
  sortIcon.classList.remove('bi-caret-up-fill', 'bi-caret-down-fill');
  otherHeaders.forEach(header => {
    if (header !== sortIcon) {
      header.classList.remove('bi-caret-up-fill', 'bi-caret-down-fill');
    }
  });
  // Add the appropriate icon class based on the current state
  if (isDescending) {
    sortIcon.classList.add('bi-caret-up-fill');
  } else {
    sortIcon.classList.add('bi-caret-down-fill');
  }

  // Return the appropriate order direction
  return isDescending ? 'asc' : 'desc';
}

// Event listener for the price header
priceHeader.addEventListener('click', () => {
  const sortIcon = priceHeader.querySelector('.sortIcon');
  const sortDirection = toggleSortDirection(sortIcon);
  recentSortedTable('price', sortDirection, timePeriod || '24h', currencyUuid, currencySign, offset);
  showPopup(`Sorting The Table by Price`);
});

// Event listener for the marketCap header
marketCapHeader.addEventListener('click', () => {
  const sortIcon = marketCapHeader.querySelector('.sortIcon');
  const sortDirection = toggleSortDirection(sortIcon);
  recentSortedTable('marketCap', sortDirection, timePeriod || '24h', currencyUuid, currencySign, offset);
  showPopup(`Sorting The Table by Market Cap`);
});

// Event listener for the volume header
volumeHeader.addEventListener('click', () => {
  const sortIcon = volumeHeader.querySelector('.sortIcon');
  const sortDirection = toggleSortDirection(sortIcon);
  recentSortedTable('24hVolume', sortDirection, timePeriod || '24h', currencyUuid, currencySign, offset);
  showPopup(`Sorting The Table by Volume`);
});

// Event listener for the change header
changeHeader.addEventListener('click', () => {
  const sortIcon = changeHeader.querySelector('.sortIcon');
  const sortDirection = toggleSortDirection(sortIcon);
  recentSortedTable('change', sortDirection, timePeriod || '24h', currencyUuid, currencySign, offset);
  showPopup(`Sorting The Table by Change`);
});

// Set the current value of the arguments going to be used as parameter from the argument being passed to call it again.
let currencyUuid = 'yhjMzLPhuIDl';
let currencySign = '$';
let recentHeaderType = 'marketCap';
let recentSortDirection = 'desc';
let timePeriod = '24h';
let offset = 0; // Initial offset
const limit = 50; 

function recentSortedTable(headerType, sortDirection, timePeriod, uuid, sign, offset) {
  currencyUuid = uuid;
  currencySign = sign;
  recentHeaderType = headerType;
  recentSortDirection = sortDirection;
  recentTimePeriod = timePeriod;
  fetchCoins(limit, offset, recentTimePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
}

fetchMarketData();


// Changed the callbackfunction's 3rd argument to recentTimePeriod and changed the passed in
//  Everything is working with the customize and sort 
//  had an error when reload site, the th won't sort due to timeperiod was not set
//  fixed the error with reload site by adding an || operator with a value so it can fetch the data.