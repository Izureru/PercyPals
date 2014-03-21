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

function DeleteCookie (name) 
{ 
	var exp = new Date(); 
	exp.setTime (exp.getTime() - 1);  
	var cval = GetCookie (name); 
	document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}

var expDays = 30;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));

function amt()
{
	var count = GetCookie('count')
	if(count == null) 
	{
		SetCookie('count','1')
		return 1
	}
	else 
	{
		var newcount = parseInt(count) + 1;
		DeleteCookie('count')
		SetCookie('count',newcount,exp)

		switch (newcount)
		{
			case 1:
			show_image('http://google.com/images/logo.gif',276,110,'Google Logo');
			break;

			case 2:
			show_image('http://google.com/images/logo.gif',276,110,'Google Logo');
			break;

			case 3:
			show_image('http://google.com/images/logo.gif',276,110,'Google Logo');
			break;

			case 4:
			show_image('http://google.com/images/logo.gif',276,110,'Google Logo');
			break;

			default:
			show_image('http://spoki.tvnet.lv/upload2/articles/68/685272/images/_origin_-10-Random-WTFakti--4.jpg',276,110,'Google Logo');
			break
		}
		// if(newcount == 2)
		// {
		// 	show_image('http://google.com/images/logo.gif', 
  //                276, 
  //                110, 
  //                'Google Logo');
		// }
		// else
		// {
		// 	show_image('http://spoki.tvnet.lv/upload2/articles/68/685272/images/_origin_-10-Random-WTFakti--4.jpg', 
  //                276, 
  //                110, 
  //                'Google Logo');
		// }
		return count
   	}
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function getCookieVal(offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}
