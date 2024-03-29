/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Waiting Page Animations Script

Created by.
 ______     ______     __  __     ______   ______     ______     __    __    
/\  == \   /\  __ \   /\_\_\_\   /\__  _\ /\  ___\   /\  __ \   /\ "-./  \   
\ \  __<   \ \ \/\ \  \/_/\_\/_  \/_/\ \/ \ \  __\   \ \  __ \  \ \ \-./\ \  
 \ \_\ \_\  \ \_____\   /\_\/\_\    \ \_\  \ \_____\  \ \_\ \_\  \ \_\ \ \_\ 
  \/_/ /_/   \/_____/   \/_/\/_/     \/_/   \/_____/   \/_/\/_/   \/_/  \/_/ 
                                                                             
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// Fonction
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function transOne(){
	$('#trans-one-left').animate({
		left: 0},
		500, function() { });

	$('#trans-one-right').animate({
		left: "50%"},
		500, function() { });

	$('#block-2').show().delay(1000).animate({
		top: 0},
		500, function() { });
};

function transTwo(){
	$('#block-2').animate({
		top: "100%"},
		500, function() {
			hide();
		});
};

function verticalCenter(id){
	// id -> string
	var htuser = $(window).height();
	var htelem = $(id).height();
	
}


// Events
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$(window).load(function(){

});

$('#bouton-1').click(function(){
	transOne();
});

$('#bouton-2').click(function(){
	transTwo();
});