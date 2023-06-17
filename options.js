const optionsClose = document.querySelector('#optionsClose');
const optionsContainer = document.querySelector('.options-container');
const optionButton = document.querySelector('#customize');
const optionsForm = document.querySelector('#optionsForm');

// Set the default time period which would be changed based on the customize option user picked.
let timePeriod = '';

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
    //  recentSortedTable();

    const price = document.querySelector('#price');
    const priceCol = document.querySelectorAll('.price');
    const priceHeader = document.querySelector('#priceHeader');
    if (price.checked == false){
        priceHeader.classList.add("hide");
        for(let i = 0; i < priceCol.length; i++){
        priceCol[i].classList.add("hide");
    }
        // console.log('price off')
    } else {
        priceHeader.classList.remove("hide");
        for(let i = 0; i < priceCol.length; i++){
            priceCol[i].classList.remove("hide");
        }
        // console.log('price on')
    }
    
    const marketCap = document.querySelector('#marketCap');
    const marketCapCol = document.querySelectorAll('.marketCaptd');
    const marketCapHeader = document.querySelector('#marketCapHeader');
    if (marketCap.checked == false){
        marketCapHeader.classList.add("hide");
        for(let i = 0; i < marketCapCol.length; i++){
            marketCapCol[i].classList.add("hide");
    }
        // console.log('mcap off')
    } else {
        marketCapHeader.classList.remove("hide");
        for(let i = 0; i < marketCapCol.length; i++){
            marketCapCol[i].classList.remove("hide");
        }
        // console.log('mcap on')
    }

    const vol24 = document.querySelector('#vol24h');
    const vol24Col = document.querySelectorAll('.vol24h');
    const vol24Header = document.querySelector('#vol24Header');
    if (vol24.checked == false){
        vol24Header.classList.add("hide");
        for(let i = 0; i < vol24Col.length; i++){
            vol24Col[i].classList.add("hide");
    }
        // console.log('vol24 off')
    } else {
        vol24Header.classList.remove("hide");
        for(let i = 0; i < vol24Col.length; i++){
            vol24Col[i].classList.remove("hide");
        }
        // console.log('vol24 on')
    }

    const change1h = document.querySelector('#h1');
    const change24h = document.querySelector('#h24');
    const change7d = document.querySelector('#days7');
    const change30d = document.querySelector('#days30');
 

        if(change1h.checked == true){
            timePeriod = '1h';
            // recentSortedTable(undefined, undefined, timePeriod);
            fetchCoins(undefined, undefined, timePeriod, recentHeaderType, recentSortDirection);
            showPopup(`Hourly Price Change`);
            console.log('Displaying 1h data.')
        }else if(change24h.checked == true){
            timePeriod = '24h';
            // recentSortedTable(undefined, undefined, timePeriod);
            fetchCoins(undefined, undefined, timePeriod, recentHeaderType, recentSortDirection);
            showPopup(`Daily Price Change`);
            console.log('Displaying 24 data')
        }else if(change7d.checked == true){
            timePeriod = '7d';
            // recentSortedTable(undefined, undefined, timePeriod);
            fetchCoins(undefined, undefined, timePeriod, recentHeaderType, recentSortDirection);
            showPopup(`Weekly Price Change`);
            console.log('Displaying 7d data')
        }else if(change30d.checked == true){
            timePeriod = '30d';
            // recentSortedTable(undefined, undefined, timePeriod);
            fetchCoins(undefined, undefined, timePeriod, recentHeaderType, recentSortDirection);
            showPopup(`Monthly Price Change`);
            console.log('Displaying 30d data.')
        }
        // recentSortedTable(undefined, undefined, timePeriod);
        // fetchCoins(undefined, undefined, recentTimePeriod, recentHeaderType, recentSortDirection);
        // recentSortedTable();
    });
// Time period is now being stored for everytime the user sorts it out

//  Needs to fix where when user uses the customize button it would still be in the format of the recently used sort 
    // need to fix where whenever user click the button or option for the it would still sort it 



    //  Everything works already with the problem of customizing the table while being sorted
    // Changes: I've called the main function with the parameters that was recently used as arguments so it will call it every changes.
// Notes: The API will return error 429 once it's being fetched too much within a minute or the table is being customized too fast.


// changed the fetchCoins 3rd argument to