



var siteNameInput  = document.getElementById("siteNameInput");
var siteUrlInput  = document.getElementById("siteUrlInput");

var required = document.getElementById("required");

var bookmarkContainer ;

if( localStorage.getItem("myBookmarks") == null )
{
    var bookmarkContainer = [];
}
else
{
    bookmarkContainer = JSON.parse( localStorage.getItem("myBookmarks") );
    displayBookmark()
}


function addBookmark()
{
    if( siteNameInput.value == "" || siteUrlInput.value == "" )
    {
        required.classList.replace("d-none" , "d-flex");
    }
    else
    {
        required.classList.replace("d-flex" , "d-none");

        var bookmark = {

            name: siteNameInput.value,
            url: siteUrlInput.value,
        }
        bookmarkContainer.push( bookmark );
        localStorage.setItem("myBookmarks" , JSON.stringify( bookmarkContainer ))
        displayBookmark();
        clearForm()
    }
}


function displayBookmark()
{
    var cartoona = ``;

    for(var i = 0 ; i<bookmarkContainer.length ; i++)
    {
        cartoona += 
        `<div class="result-sec container my-4 py-4">
            <div class=" w-50">
                <div class=" d-flex justify-content-between">
                    <h3>${ bookmarkContainer[i].name }</h3>
                    <div>
                        
                        <button onclick="link(${i})" class="btn btn-primary">visit</button>
                        <button onclick="deleteBookmark(${i})" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>`
    }
    document.getElementById("bookmarkBody").innerHTML = cartoona;
    
}

function clearForm()
{
    siteNameInput.value = "";
    siteUrlInput.value = "";
}


function deleteBookmark( bookmarkNum )
{
    bookmarkContainer.splice( bookmarkNum , 1 );
    localStorage.setItem("myBookmarks" , JSON.stringify(bookmarkContainer) );
    displayBookmark()
}




function link(visitindex)
{
    var url = bookmarkContainer[visitindex].url;

    if( bookmarkContainer[visitindex].url.includes("http") )
    {
        window.open( url );
    }
    else
    {
        window.open( "http://"+url );
    }
    
}