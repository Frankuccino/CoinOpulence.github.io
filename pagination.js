
const page1 = document.querySelector('.pageN1');
const page2 = document.querySelector('.pageN2');
const page3 = document.querySelector('.pageN3');
const page4 = document.querySelector('.pageN4');
const page5 = document.querySelector('.pageN5');
const page6 = document.querySelector('.pageN6');
const page7 = document.querySelector('.pageN7');
const page8 = document.querySelector('.pageN8');
const page9 = document.querySelector('.pageN9');
const page10 = document.querySelector('.pageN10');
const page11 = document.querySelector('.pageN11');
const page12 = document.querySelector('.pageN12');
const currentPageN = document.querySelector('.currentPage');
const spanPage1 = document.querySelector('.spanPage1');
const spanPage2 = document.querySelector('.spanPage2');

const showMoreButton = document.getElementById('showMoreButton');
showMoreButton.addEventListener('click', () => {
    offset += limit; // Increment the offset by the limit value
    const currentPageN = document.querySelector('.currentPage');
    currentPageN.classList.remove('currentPage');
    paginationCurrent();
    recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
  });

page1.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 0;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page2.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 50;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page3.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 100;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page4.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 150;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page5.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 200;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page6.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 250;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page7.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 300;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page8.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 350;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page9.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 400;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page10.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 450;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page11.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 500;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

page12.addEventListener('click', () => {
  const currentPageN = document.querySelector('.currentPage');
  currentPageN.classList.remove('currentPage');
  offset = 550;
  paginationCurrent()
  recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
})

const showMoreButton_1 = document.getElementById('showMoreButton-1');
showMoreButton_1.addEventListener('click', () => {
offset -= limit; // Increment the offset by the limit value
const currentPageN = document.querySelector('.currentPage');
currentPageN.classList.remove('currentPage');
paginationCurrent();
recentSortedTable(recentHeaderType, recentSortDirection, timePeriod, currencyUuid, currencySign, offset);
});


function paginationCurrent(){
  if(offset === 0){
    //page 1
    page1.classList.add('currentPage');
    page2.classList.remove('hide');
    page3.classList.remove('hide');
    page4.classList.remove('hide');
    page5.classList.remove('hide');
    spanPage1.classList.add('hide');
    spanPage2.classList.remove('hide');

    page6.classList.add('hide');
    page7.classList.add('hide');
    page8.classList.add('hide');
    page9.classList.add('hide');
    page10.classList.add('hide');
    page11.classList.add('hide');
  }
  else if(offset === 50){
    // page 2
    page1.classList.remove('hide');
    page2.classList.remove('hide');
    page3.classList.remove('hide');
    page4.classList.remove('hide');
    page5.classList.remove('hide');
    page2.classList.add('currentPage');
    spanPage1.classList.add('hide');

    page6.classList.add('hide');
    page7.classList.add('hide');
    page8.classList.add('hide');
    page9.classList.add('hide');
    page10.classList.add('hide');
    page11.classList.add('hide');
  }
  else if(offset === 100){
    // page 3
    page1.classList.remove('hide');
    page2.classList.remove('hide');
    page3.classList.remove('hide');
    page4.classList.remove('hide');
    page5.classList.remove('hide');
    page3.classList.add('currentPage');
    spanPage1.classList.add('hide');

    page6.classList.add('hide');
    page7.classList.add('hide');
    page8.classList.add('hide');
    page9.classList.add('hide');
    page10.classList.add('hide');
    page11.classList.add('hide');
  }
  else if(offset === 150){
    // page 4
    page1.classList.remove('hide');
    page2.classList.remove('hide');
    page3.classList.remove('hide');
    page4.classList.remove('hide');
    page5.classList.remove('hide');
    page4.classList.add('currentPage');

  }
  else if(offset === 200){
    // page 5
    page4.classList.remove('hide');
    page5.classList.remove('hide');
    page5.classList.add('currentPage');

    page2.classList.add('hide');
    spanPage1.classList.remove('hide');
    
    page6.classList.remove('hide');
    page7.classList.remove('hide');
  }
  else if(offset === 250){
    page5.classList.remove('hide');
    page6.classList.add('currentPage');
    page7.classList.remove('hide');
    page8.classList.remove('hide');
    // page 6
    page3.classList.add('hide');
    page9.classList.add('hide');
    // spanPage2.classList.add('hide');
  }
  else if(offset === 300){
    page6.classList.remove('hide');
    page7.classList.add('currentPage');
    spanPage1.classList.remove('hide');
    // spanPage2.classList.add('hide');
    // page 7
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');

    page9.classList.remove('hide');
    page8.classList.remove('hide');
  }
  else if(offset === 350){
    page6.classList.remove('hide');
    page7.classList.remove('hide');
    page8.classList.add('currentPage');
    spanPage1.classList.remove('hide');
    spanPage2.classList.remove('hide');
    // page 8
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
    page5.classList.add('hide');
    page10.classList.add('hide');
    page11.classList.add('hide');

    page9.classList.remove('hide');
    page10.classList.remove('hide');
  }
  else if(offset === 400){
    page8.classList.remove('hide');
    page9.classList.add('currentPage');
    spanPage1.classList.remove('hide');
    // spanPage2.classList.add('hide');
    // page 9
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
    page5.classList.add('hide');
    page6.classList.add('hide');

    page10.classList.remove('hide');
    page11.classList.remove('hide');
  }
  else if(offset === 450){
    page9.classList.remove('hide');
    page10.classList.add('currentPage');
    page11.classList.remove('hide');
    spanPage1.classList.remove('hide');
    spanPage2.classList.add('hide');
    // page 10
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
    page5.classList.add('hide');
  }
  else if(offset === 500){
    page11.classList.add('currentPage');
    page12.classList.remove('hide');
    spanPage1.classList.remove('hide');
    spanPage2.classList.add('hide');
    // page 11
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
    page5.classList.add('hide');
    page7.classList.add('hide');
  }
  else if(offset === 550){
    page12.classList.add('currentPage');
    spanPage1.classList.remove('hide');
    spanPage2.classList.add('hide');
    // page 12
    page2.classList.add('hide');
    page3.classList.add('hide');
    page4.classList.add('hide');
    page5.classList.add('hide');
    page6.classList.add('hide');
    page7.classList.add('hide');
    page8.classList.add('hide');
    page9.classList.remove('hide');
    page10.classList.remove('hide');
    page11.classList.remove('hide');
  }
  
}

