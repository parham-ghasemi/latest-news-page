let pageNumberContainer = document.getElementById("page-number");
let pageNumber = 1;
let nextPageBtn = document.getElementById("next-page-btn");
let previousPageBtn = document.getElementById("previous-page-btn");
let articlesContainer = document.getElementById("articles-container");
let articles = [];

document.addEventListener("DOMContentLoaded", async ()=>{
  await fetchNews();
})

const addArticle = async ()=>{
    let li = document.createElement("li");
    li.classList.add("row"); // Corrected class name (should be "row")
    
    let article = document.createElement("article");
    article.classList.add("col-md-10", "pe-5");
    
    let articleHeading = document.createElement("h5");
    articleHeading.classList.add("article-header");
    
    let articleLink = document.createElement("a");
    articleLink.classList.add("text-primary", "text-decoration-none");
    articleLink.innerText = "Sample"; // Corrected property assignment
    
    articleHeading.appendChild(articleLink); // Corrected append order
    
    let articleBody = document.createElement("p");
    articleBody.classList.add("article-body");
    
    let articleDate = document.createElement("small");
    articleDate.classList.add("article-date", "text-secondary");
    articleDate.innerText = "Date"; // Corrected property assignment
    
    articleBody.appendChild(articleDate); // Corrected append order
    articleBody.appendChild(document.createTextNode("body")); // Added body text
    
    

//   articlesContainer.innerHTML = ""; // Clear container before adding new articles
articles.forEach(articleData => {
    let li = document.createElement("li");
    li.classList.add("row"); 

    let article = document.createElement("article");
    article.classList.add("col-md-10", "pe-5");

    let articleHeading = document.createElement("h5");
    articleHeading.classList.add("article-header");

    let articleLink = document.createElement("a");
    articleLink.classList.add("text-primary", "text-decoration-none");
    articleLink.innerText = articleData.title; // Corrected property assignment

    articleHeading.appendChild(articleLink); // Corrected append order

    let articleBody = document.createElement("p");
    articleBody.classList.add("article-body");

    let articleDate = document.createElement("small");
    articleDate.classList.add("article-date", "text-secondary");
    articleDate.innerText = articleData.publishedAt + " - "; // Corrected property assignment

    articleBody.appendChild(articleDate); // Corrected append order
    articleBody.appendChild(document.createTextNode(articleData.description)); // Added body text

    // Append the newly created elements in the desired order
    li.appendChild(article);
    article.appendChild(articleHeading);
    article.appendChild(articleBody);

    articlesContainer.appendChild(li);
  });
}


const fetchNews = async ()=>{
  // console.log("Fetching...");
  var url = 'https://newsapi.org/v2/everything?' +
        'en&'+
        'q=since&' +
        'from=2024-04-10&' +
        'pageSize=20&'+
        'page='+pageNumber+
        '&sortBy=publishedAt&' +
        'apiKey=b238d86bb8ac4908aebf6ed6e572d9dc';

  var req = new Request(url);

  let a = await fetch(req);
  let response = await a.json();
  // console.log(response);
  articles = response.articles; // Update articles array with new data
  // console.log(articles);
  await addArticle();
}

const clearArticles = ()=>{
  articlesContainer.innerHTML = "";
}

nextPageBtn.addEventListener("click", ()=>{
  clearArticles();
  pageNumber++;
  pageNumberContainer.innerText = pageNumber;
  fetchNews();
})

previousPageBtn.addEventListener("click", ()=>{
  clearArticles();
  pageNumber--;
  pageNumberContainer.innerText = pageNumber;
  fetchNews();
})
