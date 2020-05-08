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
//     var ul = $("#elements");
//     for(var i=0;i<itemsList.length;i++){
//         var elem = ul.append( "<li>"+itemsList[i].name+"</li>" );
//    }
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
    input = $("#myInput");
    filter = input.value.toUpperCase();
    var result = itemsList.filter(item=>item.name.indexOf(filter)!==-1)
    console.log(result)
    li = ul.getElementsByTagName("li");
    for (i = 0; i < result.length; i++) {
        var elem = ul.append( "<li>"+itemsList[i].name+"</li>" );

        // txtValue = itemsList[i].name
        // if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //     li[i].style.display = "";
        // } else {
        //     li[i].style.display = "none";
        // }
    }
}
