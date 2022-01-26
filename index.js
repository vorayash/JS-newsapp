
const xhr = new XMLHttpRequest();

let category = 'entertainment';
let apiKey = 'pub_3385f5288b516990f3ddd63996e09616b4ea';
let newsHolder = document.getElementById('newsHolder');

xhr.open('GET', `https://newsdata.io/api/1/news?apikey=${apiKey}&q=bbc%20news`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let news = "";
        let json = JSON.parse(this.responseText)["results"];
        console.log(json);

        json.forEach((element, index) => {
            // console.log(element);
            if (element["image_url"] != null) {
                
                let description=element["description"];
                
                    if(description==null) description="";

                
                news += `<p class='my-2'>
                <a class="btn btn-outline-primary " style="text-align:left"  data-bs-toggle="collapse" href="#collapse${index}" role="button"
                    aria-expanded="false" aria-controls="collapse${index}">
                    ${element["title"]}
                </a>
            </p>
            <div class="collapse" id="collapse${index}">
                <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                <div class="col-md-4">
                    <img src="${element["image_url"]}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    
                    <p class="card-text">${description}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
            </div>`;
            }
            else {
                news += `<p class='my-2'>
                <a class="btn btn-outline-primary " style="text-align:left" data-bs-toggle="collapse" href="#collapse${index}" role="button"
                    aria-expanded="false" aria-controls="collapse${index}">
                    ${element["title"]}
                </a>
            </p>
            <div class="collapse" id="collapse${index}">
                <div class="card card-body">
                    ${element["description"]}
                </div>
            </div>`;
            }


        });
        newsHolder.innerHTML = news;


    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();


