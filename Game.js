var Game = function(){
	this.name = "Tic Tac Toe",
	this.board = [
		0,0,0,
		0,0,0,
		0,0,0
	],
	this.nextTurn = false,
	this.turns = 0,
	this.over = function(gameTimer){
		console.log("Game Over");
		clearInterval(gameTimer);
	},
	this.convertPlayerRequest = function(clicked){
		console.log("Converting Player Request")
		switch(clicked){
			case "box1":
				clicked = 0;
				break;
			case "box2":
				clicked = 1;
				break;
			case "box3":
				clicked = 2;
				break;
			case "box4":
				clicked = 3;
				break;
			case "box5":
				clicked = 4;
				break;
			case "box6":
				clicked = 5;
				break;
			case "box7":
				clicked = 6;
				break;
			case "box8":
				clicked = 7;
				break;
			case "box9":
				clicked = 8;
				break;
			}
			this.checkPlayerRequest(clicked);
	},
	this.checkPlayerRequest = function(box){
		console.log("Checking Player Request")
		if(this.board[box] == 0){
				this.board[box] = 1;
				this.turns++;
				this.nexTurn = true;
		}
		if(this.nexTurn){
			this.AI();
		}
	},
	this.AI = function(){
		console.log("AI Carried");
		
		var row1 = this.board.slice(0,3);
		var row2 = this.board.slice(3,6);
		var row3 = this.board.slice(6,9);
		
		var temp1 = row1.filter(function(i){
			return i > 1;
		});
		var temp2 = row2.filter(function(i){
			return i > 1;
		});
		var temp3 = row3.filter(function(i){
			return i > 1;
		});
		
		var tempArray = [
			temp1,
			temp2,
			temp3
		];
		console.log(tempArray);
		
		var rowPos = tempArray.indexOf(2);
		console.log(rowPos);
		if(rowPos == -1){
			this.checkCompPlayerRequest();
		}else{
			switch(rowPos){
				case 0:
					var posToGo = row1.findIndex(function(i){
						return i <= 0;
					});
					this.board[posToGo] = 2;
					this.turns++;
					this.nexTurn = false;
					console.log(posToGo);
					break;
				case 1:
					var posToGo = row2.findIndex(function(i){
						return i <= 0;
					});
					this.board[posToGo] = 2;
					this.turns++;
					this.nexTurn = false;
					console.log(posToGo);
					break;
				case 2:
					var posToGo = row3.findIndex(function(i){
						return i <= 0;
					});
					this.board[posToGo] = 2;
					this.turns++;
					this.nexTurn = false;
					console.log(posToGo);
					break;
				default:
					this.checkCompPlayerRequest();
					break;
			}
		}
	},
	this.checkCompPlayerRequest = function(){
		console.log("AI Activated");
		if(this.turns == 9){
			this.over();
		}else if(this.turns == 8){
			var lastMove = this.board.findIndex(0);
			this.board[lastMove] = 2;
			this.over();
		}else{
			var r = Math.floor(Math.random() * 3);
		
			if(r == 1){
					this.AI();
			}else{
				var pick = Math.floor(Math.random() * 9);
			
				if(this.board[pick] == 0){
					this.board[pick] = 2;
					this.turns++;
					this.nexTurn = false;
				}else{
					this.checkCompPlayerRequest();
				}
			}
		}
	}
}