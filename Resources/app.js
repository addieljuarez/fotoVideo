// 
//  app.js
//  camara
//  
//  Created by addiel on 2012-05-15.
//  Copyright 2012 addiel. All rights reserved.
// 


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create window
//
var winMain = Titanium.UI.createWindow({
	title:'uso de la camara',
	//layout:'vertical',
	backgroundColor:'#000',
});

//
// create button for video
//
var botonVideo = Titanium.UI.createButton({
	title: 'video',
	width:'100dp',
	height:'50dp',
	top:'30%',
});
winMain.add(botonVideo);

//
// add event
//
botonVideo.addEventListener('click', function(e){
	var winVideo = Ti.UI.createWindow({
		
		url:'ui/video.js',
	});
	winVideo.open({modal:true});
});


//
// create button for  picture
//
var botonFoto = Titanium.UI.createButton({
	title: 'foto',
	width:'100dp',
	height:'50dp',
	top:'60%',
});
winMain.add(botonFoto);
//
// add event
//
botonFoto.addEventListener('click',function(e){
	var winFoto = Ti.UI.createWindow({
		url:'ui/foto.js'
	});
	winFoto.open({modal:true});
});




//
//open de win
//
winMain.open();
