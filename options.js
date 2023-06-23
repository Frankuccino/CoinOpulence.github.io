const optionsClose = document.querySelector('#optionsClose');
const optionsContainer = document.querySelector('.options-container');
const optionButton = document.querySelector('#customize');
const optionsForm = document.querySelector('#optionsForm');

// Set the default time period which would be changed based on the customize option user picked.
const openOptions = () => {
    optionsContainer.style.display = 'block';
};

optionButton.addEventListener('click', openOptions);

const closeOptions = () => {
    optionsContainer.style.display = 'none';
}

optionsClose.addEventListener('click', closeOptions);

optionsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    optionsContainer.style.display = 'none';

    const price = document.querySelector('#price');
    const priceCol = document.querySelectorAll('.price');
    const priceHeader = document.querySelector('#priceHeader');
    if (price.checked == false){
        priceHeader.classList.add("hide");
        for(let i = 0; i < priceCol.length; i++){
        priceCol[i].classList.add("hide");
    }
    } else {
        priceHeader.classList.remove("hide");
        for(let i = 0; i < priceCol.length; i++){
            priceCol[i].classList.remove("hide");
        }
    }
    
    const marketCap = document.querySelector('#marketCap');
    const marketCapCol = document.querySelectorAll('.marketCaptd');
    const marketCapHeader = document.querySelector('#marketCapHeader');
    if (marketCap.checked == false){
        marketCapHeader.classList.add("hide");
        for(let i = 0; i < marketCapCol.length; i++){
            marketCapCol[i].classList.add("hide");
    }
    } else {
        marketCapHeader.classList.remove("hide");
        for(let i = 0; i < marketCapCol.length; i++){
            marketCapCol[i].classList.remove("hide");
        }
    }

    const vol24 = document.querySelector('#vol24h');
    const vol24Col = document.querySelectorAll('.vol24h');
    const vol24Header = document.querySelector('#vol24Header');
    if (vol24.checked == false){
        vol24Header.classList.add("hide");
        for(let i = 0; i < vol24Col.length; i++){
            vol24Col[i].classList.add("hide");
    }
    } else {
        vol24Header.classList.remove("hide");
        for(let i = 0; i < vol24Col.length; i++){
            vol24Col[i].classList.remove("hide");
        }
    }

    const change1h = document.querySelector('#h1');
    const change24h = document.querySelector('#h24');
    const change7d = document.querySelector('#days7');
    const change30d = document.querySelector('#days30');
    const volumeSpan = document.querySelector('#volumeSpan');
    const changeSpan = document.querySelector('#changeSpan');

        if(change1h.checked == true){
            timePeriod = '1h';
            volumeSpan.textContent = ` (${timePeriod})`;
            changeSpan.textContent = ` (${timePeriod})`;
            if(currentActivePage === false){
                fetchCoins(undefined, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
            }else{
                updateFavorites(currencyUuid, timePeriod);
            }
            showPopup(`Hourly Price Change`);
            console.log('Displaying 1h data.')
        }else if(change24h.checked == true){
            timePeriod = '24h';
            volumeSpan.textContent = ` (${timePeriod})`;
            changeSpan.textContent = ` (${timePeriod})`;
            // recentSortedTable(undefined, undefined, timePeriod);
            if(currentActivePage === false){
                fetchCoins(undefined, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
            }else{
                updateFavorites(currencyUuid, timePeriod);
            }
            showPopup(`Daily Price Change`);
            console.log('Displaying 24 data')
        }else if(change7d.checked == true){
            timePeriod = '7d';
            volumeSpan.textContent = ` (${timePeriod})`;
            changeSpan.textContent = ` (${timePeriod})`;
            // recentSortedTable(undefined, undefined, timePeriod);
            if(currentActivePage === false){
                fetchCoins(undefined, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
            }else{
                updateFavorites(currencyUuid, timePeriod);
            }
            showPopup(`Weekly Price Change`);
            console.log('Displaying 7d data')
        }else if(change30d.checked == true){
            timePeriod = '30d';
            volumeSpan.textContent = ` (${timePeriod})`;
            changeSpan.textContent = ` (${timePeriod})`;
            if(currentActivePage === false){
                fetchCoins(undefined, offset, timePeriod, recentHeaderType, recentSortDirection, currencyUuid, currencySign);
            }else{
                updateFavorites(currencyUuid, timePeriod);
            }

            showPopup(`Monthly Price Change`);
            console.log('Displaying 30d data.')
        }

    const chart1Day = document.querySelector('#chart1');
    const chart7Days = document.querySelector('#chart7');
    const chart30Days = document.querySelector('#chart30');

        if(chart1Day.checked == true){
            setChartDays = 1;
            showPopup(`Daily Chart Change`);
        }else if(chart7Days.checked == true){
            setChartDays = 7;
            showPopup(`Weekly Chart Change`);
        }else if(chart30Days.checked == true){
            setChartDays = 30;
            showPopup(`Monthly Chart Change`);
        }
    });