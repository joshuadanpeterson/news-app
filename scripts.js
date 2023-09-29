// Assume the API key is fetched securely from the server
const apiKey = process.env.NEWS_API_KEY;

// Flag to check if a search has been performed
let searchPerformed = false;

// Implement pagination
let currentPage = 1;
const pageSize = 10;

// Store query for pagination
let currentQuery = '';  // Define this at the top of your script

// Add event listener for search input
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    currentQuery = document.getElementById('searchText').value;  // Update currentQuery
    currentPage = 1;  // Reset to first page
    fetchNews(currentQuery);  // Pass the currentQuery
    document.getElementById('searchText').value = '';
});

// Add event listener for pagination
document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        fetchNews(currentQuery);  // Pass the currentQuery
        }
});

document.getElementById('nextPage').addEventListener('click', function() {
    currentPage++;
    fetchNews(currentQuery);  // Pass the currentQuery
});


// Function to get news feed
async function fetchNews(query) {
    const language = document.getElementById('language').value;
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&page=${currentPage}&pageSize=${pageSize}`;

    if (query) {
        url += `&q=${encodeURIComponent(query)}`;
    }

    if (language !== 'all') {
        url += `&language=${language}`;
    }

    currentQuery = query;  // Update currentQuery

    console.log(`Fetching news with URL: ${url}`);  // Debugging line
    console.log(`Current page: ${currentPage}`);  // Debugging line

    // Show the pagination buttons
    document.getElementById('pagination-buttons').style.visibility = 'visible';

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);  // Debugging line

        if (data.articles.length === 0) {
            console.log("No articles found");
            return;
        }

        searchPerformed = true;
        updateContainers();

        const h2 = document.querySelector('h2');
        const queryTitleCase = query ? (query[0].toUpperCase() + query.slice(1)) : 'Top';
        h2.textContent = `Top ${queryTitleCase} Headlines`;

        displayNews(data.articles);

    } catch (error) {
        console.error('There was an error!', error);
    }
    // Show the pagination buttons
    document.getElementById('pagination-buttons').style.visibility = 'visible';
}

// Function to toggle header and search container based on searchPerformed flag
function updateContainers() {
    const searchContainer = document.getElementById('search-container');
    const headerContainer = document.getElementById('header-container');

    if (searchPerformed) {
        // Change the position to 'static' so that they flow with the document
        searchContainer.style.position = 'static';
        headerContainer.style.position = 'static';

        // Center-align by adding the 'centered' class
        searchContainer.classList.remove('initial-centered');
        searchContainer.classList.add('centered');
        headerContainer.classList.add('centered');

        // Remove top and left positioning
        headerContainer.style.top = 'auto';
        headerContainer.style.left = 'auto';
        headerContainer.style.transform = 'none';
    } else {
        // Revert back to absolute positioning
        searchContainer.style.position = 'absolute';
        headerContainer.style.position = 'absolute';

        // Revert other styles or classes
        searchContainer.classList.remove('centered');
        searchContainer.classList.add('initial-centered');
        headerContainer.classList.remove('centered');
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = '';  // Clear previous articles

    for (const article of articles) {
        const card = document.createElement('div');
        card.className = 'card mb-4';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title fw-bold';
        title.textContent = article.title;
        cardBody.appendChild(title);

        if(article.urlToImage) {
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = article.title;
            image.className = 'card-img-top custom-thumbnail mx-auto d-block mt-3';
            card.appendChild(image);
        }

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = article.description;
        cardBody.appendChild(description);

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';
        link.className = 'btn btn-primary';
        
        cardBody.appendChild(link);
        card.appendChild(cardBody);
        newsDiv.appendChild(card);
    }
}

// Call the function to set the initial styles
updateContainers();
