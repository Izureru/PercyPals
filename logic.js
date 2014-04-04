function Check(id)
{
	SetCookie(id,'1')

	var image1 = GetCookie('Image_1');
	var image2 = GetCookie('Image_2');
	var image3 = GetCookie('Image_3');
	var image4 = GetCookie('Image_4');

	if (image1 == null || image2 == null || image3 == null || image4 == null)
	{
		Display('sorry.png',640,824,'sorry');	
	}
	else
	{
		Display('won.png',640,824,'winner');	
	}
}

function Display(src, width, height, alt) 
{
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function SetCookie (name, value) 
{ 
	var argv = SetCookie.arguments; 
	var argc = SetCookie.arguments.length; 
	var expires = (argc > 2) ? argv[2] : null; 
	var path = (argc > 3) ? argv[3] : null; 
	var domain = (argc > 4) ? argv[4] : null; 
	var secure = (argc > 5) ? argv[5] : false; 
	document.cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) + 
	((domain == null) ? "" : ("; domain=" + domain)) +   
	((secure == true) ? "; secure" : "");
}

function DeleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function GetCookie (name) 
{ 
	var arg = name + "="; 
	var alen = arg.length; 
	var clen = document.cookie.length; 
	var i = 0; 
	while (i < clen) 
	{
		var j = i + alen;   
		if (document.cookie.substring(i, j) == arg)     
		return getCookieVal (j);   
		i = document.cookie.indexOf(" ", i) + 1;   
		if (i == 0) break;  
	} 
	return null;
}

function getCookieVal(offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}