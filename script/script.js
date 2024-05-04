const fetchNews = async ()=>{
    console.log("Fetching...");
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-05-02&' +
          'sortBy=popularity&' +
          'apiKey=b238d86bb8ac4908aebf6ed6e572d9dc';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
            console.log(response.json());
        });
}

