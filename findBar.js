function getToken(){

    let client_id = '51213679698c459cb5d247a8a3a3eca3';
    let redirect_uri = 'https://piateczka.github.io/findbar.github.io';
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`);

  };
  function getAlbums(){
    $.ajax({
        url: 'https://api.spotify.com/v1/search?type=album&query=metalica',
        type: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + localStorage.getItem('token')
        },
        success: function(data) {
            return data;
        }
    });
};

(function() {
    var match = window.location.hash.match(/#access_token=(.*?)&/);
    token =  match && match[1];
    localStorage.setItem('token', token);
    token = localStorage.getItem('token');
    if(token=="null" || token==undefined){
        getToken();
    }
    var albums = getAlbums();
    var items = albums.items;
    console.log(items);
    city = [
        {

            name: "Warszawa"
        },
        {
            name: "Kraków"
        },
        {
            name: "Poznań"
        },
        {
            name: "Londyn"
        },
        {
            name: "Warszawianice"
        },
        {
            name: "Gdańsk"
        },
        {
            name: "Gdynia"
        }
    ]
    var ul = $("#elements");
    for(var i=0;i<city.length;i++){
        var elem = ul.append( "<li>"+city[i].name+"</li>" );
   }

 
 })();
 function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("elements");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].innerHTML
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
