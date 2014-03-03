$("a.image-link:contains('imgur')").each( function() 
	{ 
		if ($(this).next().find('img').attr('alt') != '(+fav)') 
		{ 
			$(this).after("  <a href='" + $(this).text() + "/fav'  target='_blank'><img height='16' width='16' alt='(+fav)' src='http://cdn.dustball.com/add.png ' /></a>")
		} 
	} 
)