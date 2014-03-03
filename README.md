Imgur FastFavorite
==============

FastFavorite is a bookmarklet written for use on Imgur.com. 

This program adds a small icon after each image link that sources directly from Imgur or one of its subdomains. 
The icon acts as a link for "quick favoriting" the image. The image will open in a new tab and confirm before adding itself to your favorites list. 

You can add FastFavorite to your browser's shortcut bar by creating an empty bookmark and adding the following line to the "Site", "URL", or "Link" section:

```javascript
javascript:$("a.image-link:contains('imgur')").each(function(){if($(this).next().find('img').attr('alt')!='(+fav)'){$(this).after("  <a href='"+$(this).text()+"/fav' target='_blank'><img height='16' width='16' alt='(+fav)' src='http://cdn.dustball.com/add.png '/></a>")}})
```

Currently, you'll have to click the "FastFave" button on each page from which you would like to favorite links. 
I plan on expanding this into a simple browser plugin that will allow the FastFave icons to persist while browsing galleries. 

