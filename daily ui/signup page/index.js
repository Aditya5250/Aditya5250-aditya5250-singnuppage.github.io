// adding click animation to the button

$("button").on("click",function(){
    
    $("button").addClass("clic");

    setTimeout(function() {
        $("button").removeClass("clic");
    },200);
});

//adding hover animation to the button
$("button").mouseenter(function(){
    $("button").addClass("btnbkg");
})

$("button").mouseleave(function(){
    $("button").removeClass("btnbkg");
})

// adding hover animation to the input boxes
$("input").mouseenter(function(){
    $("input").addClass("inptbkgrnd");
   
});

$("input").mouseleave(function(){
    $("input").removeClass("inptbkgrnd");
});




