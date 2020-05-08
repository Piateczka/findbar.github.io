var itemsList = []
var ul = $("#elements")
function getToken(){

    let client_id = '51213679698c459cb5d247a8a3a3eca3';
    let redirect_uri = 'https://piateczka.github.io/findbar.github.io';
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`);

  };
  function handleResponseError(jqXHR, textStatus, errorThrown){
    alert(xhr.status);
    alert(thrownError);
    var ul = $("#elements");
    ul.append( "<li>Error in access to data "+jqXHR.responseText+"</li>" );
  }

  function handleResponse(data){
    itemsList =  data.albums.items;
   if(itemsList.length<=0){
    ul.append( "<li>Any albums was not found</li>" );
   }
  }

  function getAlbums(){
    $.ajax({
        url: 'https://api.spotify.com/v1/search?type=album&query=metalica',
        type: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + localStorage.getItem('token')
        },
        async: false,
        success: handleResponse,
        error: function (jqXHR, textStatus, errorThrown) { handleResponseError(jqXHR, textStatus, errorThrown) }
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
    getAlbums() 
 })();
 function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = $("#myInput").val()
    filter = input.toUpperCase();
    if(input.length==0){
        getAlbums()
    }
    if(input.length>1){
        var result = result.filter(item=>item.name.indexOf(filter)!==-1)
    }else
    {
        var result = itemsList.filter(item=>item.name.indexOf(filter)!==-1) 
    }
    console.log(result)
    for (i = 0; i < result.length; i++) {
        $("#elements").append("<li>" + result[i].name + "</li>");

    }
}
