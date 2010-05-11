function tophatMenu(menuId)
	{
	this.showMenu = function ()
		{
		thisObj.menuList.style.display = "block";
		}
		
	this.hideMenu = function ()
		{			
		thisObj.menuList.style.display = "none";
		}
	
	// Declare a local reference to THIS to create a closure
	// for later use in event handlers
	var thisObj = this;
	
	// Find and store the actual submenu
	this.menuEl = document.getElementById( menuId );
	for( x2 = 0; x2 < this. menuEl.childNodes.length; x2++ )
		{
		if( this.menuEl.childNodes[x2].tagName && this.menuEl.childNodes[x2].tagName == "UL" )
			{
			this.menuList = this.menuEl.childNodes[x2];
			}
		}
	
	this.hideMenu();
	
	// Assign the event handlers
	var oldMouseover = this.menuEl.onmouseover || function() {};
  this.menuEl.onmouseover = function ()
  	{
  	thisObj.showMenu();
  	oldMouseover();
  	}
  var oldMouseout = this.menuEl.onmouseout || function() {};
  this.menuEl.onmouseout = function ()
  	{
  	thisObj.hideMenu();
  	oldMouseout();
  	}
	}


function getElementsByClassName(classname, node) 
	{
	if( !node ) node = document.getElementsByTagName("body")[0];
	var a = [];
	var re = new RegExp('\\b' + classname + '\\b');
	var els = node.getElementsByTagName("*");
	for( var i=0,j=els.length; i<j; i++ )
		{
		if( re.test(els[i].className )) 
			{
			a.push(els[i]);
			}
		}
	return a;
	}

function tophatMenuSetup()
	{
	menus = getElementsByClassName( "has_submenu" );
	for( x = 0, array_length = menus.length; x < array_length; x++ )
		{
		if(menus[x].id.length == 0)
		  {
		  timestamp = new Date;
		  menus[x].id = timestamp.getSeconds + "_" + x;
		  }
		menus[x].tophatMenuInstance = new tophatMenu( menus[x].id );
		}
	}

var hoverOldOnload = window.onload || function() {};
window.onload = function ()
	{
	tophatMenuSetup();
	hoverOldOnload();
	}