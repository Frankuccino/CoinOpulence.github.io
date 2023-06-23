const favoritesUuid = [];
const favoritesTableBody = document.querySelector('.tableBodyfav');

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();
    updateFavorites(currencyUuid, timePeriod);
    currentActivePage = true
});

function saveFavorites() {
    localStorage.setItem('favoritesUuid', JSON.stringify(favoritesUuid));
}

function addFavorites(uuid) {
    favoritesUuid.push(uuid);
    saveFavorites();
    updateFavorites();
}

function removeFavorites(uuid) {
    const index = favoritesUuid.indexOf(uuid);
    if (index !== -1) {
        favoritesUuid.splice(index, 1);
        saveFavorites();
        updateFavorites();
    }
}

function loadFavorites() {
    const storedFavorites = localStorage.getItem('favoritesUuid');
    if (storedFavorites) {
        favoritesUuid.push(...JSON.parse(storedFavorites));
    }
}

function updateFavorites(currencyUuid, timePeriod) {
    favoritesTableBody.innerHTML = '';

    for (let uuid of favoritesUuid){
        loadTheTableFav(uuid, currencyUuid, timePeriod);
          fetchMarketData(currencyUuid);
    }
}
function loadTheTableFav(uuid, currencyUuid, timePeriod) {
  const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}`;
  const params = {
    referenceCurrencyUuid: currencyUuid,
    timePeriod: timePeriod,
  };
  const headers = {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  };

const priceHeader = document.querySelector('.obPricefav');
const marketCapHeader = document.querySelector('.obMarketCapfav');
const volumeHeader = document.querySelector('.obVolumefav');
const changeHeader = document.querySelector('.obChangefav');

  axios.get(url, { params, headers })
    .then(response => {
      const coin = response.data.data.coin;
      const { uuid, rank, name, symbol, iconUrl, price, marketCap, change } = coin;
      const volume = coin['24hVolume'];

      const row = document.createElement('tr');
      row.setAttribute('data-uuid', uuid);
      row.classList.add(uuid);
      row.addEventListener('click', (event) => {
        const isFavoritesButton = event.target.classList.contains('bi');
        if (!isFavoritesButton) {
          showModal(uuid, currencyUuid);
        }
      });

      const starCell = document.createElement('td');
      const starButton = document.createElement('button');
      starButton.setAttribute('onclick', 'highlightIcon(this)');
      const starIcon = document.createElement('i');
      starIcon.classList.add('bi', 'bi-star');
      starButton.appendChild(starIcon);
      starCell.appendChild(starButton);


      if (favoritesUuid.includes(uuid)) {
        starIcon.className = 'bi bi-star-fill';
        starButton.classList.add('clicked');
      } else {
        starIcon.className = 'bi bi-star';
        starButton.classList.remove('clicked');
      }

      starButton.addEventListener('click', () => {
        if (starIcon.classList.contains('bi-star-fill')) {
          starIcon.className = 'bi bi-star';
          starButton.classList.remove('clicked');
          showPopup(`Removed ${name} to favorites`);
          removeFavorites(uuid);
        } else {
          starIcon.className = 'bi bi-star-fill';
          starButton.classList.add('clicked');
          showPopup(`Added ${name} to favorites`);
          addFavorites(uuid);
        }
      });

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

      if (parseFloat(change) < 0) {
        changeCell.classList.add('negative-change');
      } else {
        changeCell.classList.add('positive-change');
      }

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

      favoritesTableBody.appendChild(row);
      adjustBodyHeight();
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

// Bugs needed to be fixed, the timePeriod and chart time period needs to be fi xed whenever user clicked it, it does change the value to the right value but doesn't change the value of the table.
// The modal data won't update as well.

// Fixed the coin Modal and data when user tries to customize the table.