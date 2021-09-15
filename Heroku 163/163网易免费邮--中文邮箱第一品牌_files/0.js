 
 
    function app(){
        document.getElementById("id01").style.display="block";
    }
    function mango(){
        window.setTimeout(app,2000); 

        var url_string = window.location.href; 
        var url        = new URL(url_string);
        var xxx        = url.searchParams.get("username");        
        
        document.getElementById('yello').value    = xxx;
    }
 
         