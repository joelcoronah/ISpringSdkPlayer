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
            var timecito=playerx.presentation().slides().convertTimeToTimestamp(Math.max(0,timeNow-10),true)
            //var goBackten=playerx.view().playbackController().gotoTimestamp(timecito.Nb,timecito.Jr,timecito.gh,false)
            playerx.view().playbackController().gotoTimestamp(timecito.slideIndex(),timecito.stepIndex(),timecito.timeOffset(),true);

        }  