 $(document).ready(()=>{
        //setting the stating postion
        var move = 0;
        
        //The move background function
        let moveBg = ()=>{
            move+=2;
            $("#sectionA").css({
                backgroundPosition:move + "px"
            });
        }
        setInterval(moveBg, 50);
       
    });
   