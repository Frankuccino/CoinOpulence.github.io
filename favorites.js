const favoriteCoins = [];

// Function to add a coin to favorites
function addToFavorites(coinRow) {
  const coinUuid = coinRow.dataset.uuid;
  const coinNameCell = coinRow.querySelector('td:nth-child(3)');
  const coinName = coinNameCell.textContent.trim();
  
  if (!favoriteCoins.includes(coinRow.outerHTML)) {
  coinRow.setAttribute('data-uuid', coinUuid);
  favoriteCoins.push(coinRow.outerHTML);
  showPopup(`Added ${coinName} to favorites`);
  saveFavorites();
  updateFavoritesTable();
}
}

// Call the loadFavorites function when the page is ready
document.addEventListener('DOMContentLoaded', loadFavorites);

// Function to highlight the icon and add/remove from favorites
function highlightIcon(button) {
  const icon = button.querySelector('i');
  const coinRow = button.closest('tr');
  const coinUuid = coinRow.dataset.uuid;
  coinRow.setAttribute('data-uuid', coinUuid);
  console.log(coinUuid);
  console.log(coinRow);

  if (icon.classList.contains('bi-star-fill')) {
    // Remove from favorites
    icon.className = 'bi bi-star';
    button.classList.remove('clicked');
    removeFromFavorites(coinRow);
    
  } else {
    // Add to favorites
    icon.className = 'bi bi-star-fill';
    button.classList.add('clicked');
    addToFavorites(coinRow);
  }
}

// Function to load the favorite coins from local storage
function loadFavorites() {
  const storedFavorites = localStorage.getItem('favoriteCoins');
  if (storedFavorites) {
    favoriteCoins.push(...JSON.parse(storedFavorites));
    updateFavoritesTable();
  }
}

function removeFromFavorites(coinRow) {
  const button = coinRow.querySelector('button');
  const index = Array.from(coinRow.parentNode.children).indexOf(coinRow);

  if (index !== -1) {
    // favoriteCoins.splice(0, favoriteCoins.length);
    favoriteCoins.splice(index, 1);
    const coinNameCell = coinRow.querySelector('td:nth-child(3)');
    const coinName = coinNameCell.textContent.trim();
    showPopup(`Removed ${coinName} from favorites`);
    saveFavorites();
    updateFavoritesTable();
  }
}

function saveFavorites() {
  localStorage.setItem('favoriteCoins', JSON.stringify(favoriteCoins));
}

// Sample code for updating the favorites table
function updateFavoritesTable() {
  const favoritesTableBody = document.querySelector('.tableBodyfav');
  favoritesTableBody.innerHTML = ''; // Clear the table body content
  
  favoriteCoins.forEach((coin) => {
    const row = document.createElement('tr');
    row.innerHTML = coin;
    const coinUuid = row.dataset.uuid;
    row.setAttribute('data-uuid', coinUuid);
    favoritesTableBody.appendChild(row);
  });
}


fetchMarketData();