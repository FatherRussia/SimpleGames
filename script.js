// Slight inconsistency in code, I stopped using semicolons after closing brackets

$(document).ready(function() {
    
    //Hide 'Got It' button and slide down text 'under' my name
    $('#closeBtn').hide();
    $('#slideDown').hide();
    
    //Open overlay
    function openNav() {
    
        document.getElementById("myNav").style.height = "100%";
    }

    // Close overlay
    function closeNav() {
    
        document.getElementById("myNav").style.height = "0%";
    }
    
     //Setting up the rest of the pages
    var firstTime = localStorage.getItem('firstTimeL');
    
    //If this is the user's first visit to the page, drop the overlay (this was honestly more of an experiment than anything practical)
    if ( firstTime == null ) {
        
        openNav();
        
    }
    
    //jQuery for ripple effect, courtesy of http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design
    var parent, ink, d, x, y;
    $("#nextButton").click(function(e){
        parent = $('#buttonText').parent();
        //create .ink element if it doesn't exist
        if(parent.find(".ink").length == 0)
            parent.prepend("<span class='ink'></span>");

        ink = parent.find(".ink");
        //incase of quick double clicks stop the previous animation
        ink.removeClass("animate");

        //set size of .ink
        if(!ink.height() && !ink.width())
        {
            //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({height: d, width: d});
        }

        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;

        //set the position and add class .animate
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    })
    
    //When the big green button is clicked, redirect to other page
    $('#nextButton').click( function() {
    
            setTimeout(function(){

                            window.location.replace('./Page_1/index.html');
                
            }, 850)
        
        
        
    })
    
    //Close button in the overlay, the one that fades in after a while. After clicking this button the overlay will never show again (until you delete your local storage)
    $('#closeBtn').click( function() {
        
        firstTime = localStorage.setItem('firstTimeL', '1');
        closeNav();
        
    })
        
    //When the user clicks on my name, slide out the extra info about my project
    $('#myName').click( function() {
        
       $('#slideDown').slideToggle();
        $('#closeBtn').fadeIn(15000);
        
    });
        
    
})