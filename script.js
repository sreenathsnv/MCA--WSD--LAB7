
let booksDiv =  document.getElementById('books');
let book = document.getElementById('books')
function fetchData()
{
    xhr = new XMLHttpRequest();
    xhr.open('GET','https://books-api-rz6d.onrender.com/books',true);
    xhr.onprogress = function(){

        booksDiv.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'

    }

    xhr.onload = function(){

      if(this.readystate == 4)
      {
        if(this.status == 200)
      {
        let response = JSON.parse(this.responseText);

        response.forEach(element => {

            booksDiv.innerHTML += `
            
            <div class="card" style="width: 18rem;">
  <img src="${element.imageLink}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text"> written by ${element.author}</p>
    <a href="#" class="btn btn-primary">${element.link}</a>
  </div>
</div>
            `
            
        });
        
      }
      else{booksDiv.innerHTML = '<p style = "margin-left:35vw;font-size : 4vh;color:red;">Some Error Occured!!</p>'}
      }
      else{booksDiv.innerHTML = '<p style = "margin-left:35vw;font-size : 4vh;color:red;">Failed to load the content</p>'}
      


    }
    xhr.send()
}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}