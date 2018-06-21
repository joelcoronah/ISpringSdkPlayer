
var rollBackTenSec;
console.log('hola')
document.querySelector('.universal_mini > .bottom_panel').appendChild(document.createElement("div")).id='undoDiv_id'	
document.getElementById('undoDiv_id').appendChild(document.createElement("div")).id='labelUndoDiv_id'
document.getElementById('labelUndoDiv_id').className="botonRetrocede"
var labelid = document.getElementById('labelUndoDiv_id')
console.log(labelid)
		var ispringPresentationConnector = {}
		ispringPresentationConnector.register = function(player)
		{
			rollBackTenSec=player.view().playbackController()
			console.log(rollBackTenSec)
			labelid.onclick=function() {
				rollBackTenSec.gotoPreviousSlide();
				console.log('c')
				}
			
		 }