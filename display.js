var g;
var t;

$(document).ready(function(){
	g = new Game();
	t = setInterval(run, 60/1000);
});

function run(){
	for(var i = 0; i < g.board.length; i++){
		if(g.board[i] == 1){
			$("#box" + (i + 1)).html("<span><h1 class='text-center'>X</h1></span>")
		}
		if(g.board[i] == 2){
			$("#box" + (i + 1)).html("<span><h1 class='text-center'>O</h1></span>")
		}
	}
	$("ul li ul li").click(function(){
		var clicked = $(this).attr("id");
		
		g.convertPlayerRequest(clicked);
	});
}