const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const resultsContainer = document.querySelector('#results-container');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  
  // Make a request to the social media API and retrieve the results
  const results = [
    { name: 'Result 1', image: 'https://via.placeholder.com/100x100' },
    { name: 'Result 2', image: 'https://via.placeholder.com/100x100' },
    { name: 'Result 3', image: 'https://via.placeholder.com/100x100' },
    // ...
  ];
  
  // Clear any existing results
  resultsContainer.innerHTML = '';
  
  // Insert the results into the page
  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.classList.add('result');
    resultElement.innerHTML = `
      <h3>${result.name}</h3>
      <img src="${result.image}" alt="${result.name}">
    `;
    resultsContainer.appendChild(resultElement);
  });
});
