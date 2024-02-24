const apiUrl = 'https://fakestoreapi.com/users';

fetch(apiUrl)
  .then(response => response.json()) 
  .then(data => {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; 
    
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `Title: ${item.title} - Description: ${item.description}`;
      dataContainer.appendChild(itemElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
