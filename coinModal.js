
const paramsSM = {
  referenceCurrencyUuid: 'yhjMzLPhuIDl',
  timePeriod: '24h'
};

const headers = {
  'X-RapidAPI-Key': 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

function showModal(uuid) {
  axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}`, { paramsSM, headers })
    .then(response => {
      const coinData = response.data.data.coin;
      const { symbol, name, description, iconUrl, price, marketCap, change, websiteUrl } = coinData;
      const volume = coinData['24hVolume'];

      const modalName = document.getElementById('modal-name');
      const modalLogo = document.getElementById('modal-logo');
      const modalSymbol = document.getElementById('modal-symbol');
      const modalPrice = document.getElementById('modal-price');
      const modalMarketCap = document.getElementById('modal-marketCap');
      const modalVol24 = document.getElementById('modal-vol24');
      const modalCh24 = document.getElementById('modal-ch24');
      const modalDescription = document.getElementById('modal-description');

      modalName.textContent = name;
      modalLogo.src = iconUrl;
      modalLogo.alt = `${symbol} icon`;
      modalSymbol.textContent = symbol;
      modalPrice.textContent = `Price: $${parseFloat(price).toLocaleString('en-US')}`;
      modalMarketCap.textContent = `Market Cap: $${parseFloat(marketCap).toLocaleString('en-US')}`;
      modalVol24.textContent = `Volume(24h): $${parseFloat(volume).toLocaleString('en-US')}`;
      modalCh24.textContent = `${change}%`;
      modalDescription.textContent = description || `No information or description about ${name} is currently available at the moment to be shown, please do your own research and view ${websiteUrl}.`;

      if (parseFloat(change) < 0) {
        modalCh24.classList.add('negative-border');
      } else {
        modalCh24.classList.add('positive-border');
      }

      // Display the modal
      const modal = document.querySelector('.modal-container');
      modal.style.display = 'block';

      const closeButton = document.getElementById('modal-close');

      // Close button event listener
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      modal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      fetchChartData(uuid);
      
    })
    .catch(error => console.log(error));
}

// Function to fetch and load chart data
function fetchChartData(uuid, numberOfDays = 1, interval = "hour") {
  const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}/ohlc`;
  
  const params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    interval: interval,
    limit: numberOfDays * 24
    // limit is number of days times number of days so number of days is 1 so 24 points in shown in the chart.
    };
    const headers = {
        'X-RapidAPI-Key': 'a9c927165cmsh44f527792645fccp1954a7jsn1814abc98e08',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      };

      axios.get(url, {params, headers})
      .then(response => {
        const data = response.data.data.ohlc;

        const formattedData = {
            labels: [], // Array to store labels (timestamps)
            datasets: [{
              label: 'Price',
              data: [], // Array to store price values
              borderColor: 'rgb(60, 115, 54)',
              tension: 0.1,
              borderWidth: 1.5
            }]
          };

          data.forEach(item => {
            const timestamp = item.endingAt;
            const date = new Date(timestamp * 1000);
            const options = { 
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true
            };
            const formattedDate = date.toLocaleDateString('en-US', options);
            
            formattedData.labels.unshift(formattedDate);
            formattedData.datasets[0].data.unshift(item.close);
          });

          const chartContainer = document.getElementById('modal-chart-container');
          const existingChartCanvas = chartContainer.querySelector('canvas');
          if (existingChartCanvas) {
            chartContainer.removeChild(existingChartCanvas);
          }
    
          // Create a new chart canvas
          const newChartCanvas = document.createElement('canvas');
          newChartCanvas.id = 'modal-chart';
          chartContainer.appendChild(newChartCanvas);

        const chartContext = newChartCanvas.getContext('2d');
        const myNewChart = new Chart(chartContext, {
         type: 'line',
          data: formattedData,
          options: {
          // Chart options
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              display: false,
              grid: {
                display: true,
              },
            },
            y: {
              grid: {
                display: false,
              },
              display: true, // Hide y-axis labels
              ticks: {
                display: true,
                padding: 0,
                font: {
                  size: 10,
                },
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: true, // Disable tooltips
            },
            legend: {
              display: false, // Hide the legend
            },
          },
      
            elements: {
              point: {
                radius: 0, // Set the point radius to 0 to hide the points
                hoverRadius: 7 // Set the hover point radius to 0 to hide the points on hover
             }
           }
          }
        });
      })
      
      .catch(error => {
        console.error('An error occurred:', error);
      })
}
