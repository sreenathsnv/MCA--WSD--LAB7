
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

        if(this.status == 200)
      {
        let response = JSON.parse(this.responseText);

        response.forEach(element => {

          booksDiv.innerHTML += `
            
          <div class="card" style="width: 25vw; height:10vw; margin:1vh;">
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
    xhr.send()
}

