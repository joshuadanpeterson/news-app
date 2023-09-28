const apiKey = process.env.NEWS_API_KEY;

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way
    const query = document.getElementById('searchText').value;
    fetchNews(query);
    document.getElementById('searchText').value = '';  // Clears the search field
});


async function fetchNews(query) {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=10`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        // Modify the h2 to include the term from the query
        const h2 = document.querySelector('h2');  // Assumes there's an h1 element in your HTML
        // Make the query title case
        const queryTitleCase = query[0].toUpperCase() + query.slice(1);
        h2.textContent = `Top 10 ${queryTitleCase} Headlines`;

        // TODO: Add a function call to display the news
        displayNews(data.articles);
    } catch (error) {
        console.error('There was an error!', error);
    }
}

// Removed the fetchNews(query); line as it would throw an error because query is not defined outside the event listener

 
function displayNews(articles) {
    const newsDiv = document.querySelector('#news');

    for (const article of articles) {
        const card = document.createElement('div');
        card.className = 'card mb-4';  // Bootstrap card class, with margin-bottom for spacing

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');  // Changed from h4 to h5 to fit better within card
        title.className = 'card-title fw-bold';
        title.textContent = article.title;

        cardBody.appendChild(title);  // Append title to card body

        if(article.urlToImage) {
            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = article.title;
            image.className = 'card-img-top custom-thumbnail mx-auto d-block mt-3';  // Bootstrap card image class
            card.appendChild(image);  // Append image to card
        }

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = article.description;

        cardBody.appendChild(description);  // Append description to card body

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Read more';
        link.target = '_blank';
        link.className = 'btn btn-primary';  // Bootstrap button class

        cardBody.appendChild(link);  // Append link to card body
        
        card.appendChild(cardBody);  // Append card body to card
        newsDiv.appendChild(card);  // Append card to news div
    }
}

