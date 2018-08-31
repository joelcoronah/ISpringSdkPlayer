var ispringPresentationConnector = {};
       ispringPresentationConnector.register = function(player)
        {             
            function receiveMessage(event)
            {
                if(event.data=="2"){
                    player.view().playbackController().gotoNextSlide(true);
                }else if(event.data=="1"){
                    player.view().playbackController().gotoPreviousSlide(true);
                }else{
                    var playercito =player.presentation().slides().convertTimestampToTime(player.view().playbackController().clock().timestamp(),false,false)
                    rollbackTenSeconds(playercito,player)
                }
                
			}
			window.addEventListener("message", receiveMessage, false);    

        };
        function rollbackTenSeconds(timeNow,playerx){  
            var timecito=playerx.presentation().slides().convertTimeToTimestamp(Math.max(0,timeNow-10),true)
            playerx.view().playbackController().gotoTimestamp(timecito.slideIndex(),timecito.stepIndex(),timecito.timeOffset(),true);

        }          


       