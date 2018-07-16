var ispringPresentationConnector = {};
       ispringPresentationConnector.register = function(player)
        {             
            function receiveMessage(event)
            {
            var playercito =player.presentation().slides().convertTimestampToTime(player.view().playbackController().clock().timestamp(),false,false)
            rollbackTenSeconds(playercito,player)
			}
			window.addEventListener("message", receiveMessage, false);    

        };
        function rollbackTenSeconds(timeNow,playerx){
                if(timeNow>10){
                    var timecito=playerx.presentation().slides().convertTimeToTimestamp(timeNow-10,false)
                    var goBackten=playerx.view().playbackController().gotoTimestamp(timecito.Nb,timecito.Jr,timecito.gh,false)
                    playerx.view().playbackController().play()
                }else{
                    playerx.view().playbackController().gotoFirstSlide(false)
                }
        }  