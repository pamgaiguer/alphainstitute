$(window).load(function(){

  function growingTree(){

    $("path").css({
      fill:"none",
      stroke:"#14b9b4",
      "stroke-width":3,
      "stroke-miterlimit":10,
      "stroke-dashoffset":6450,
      "stroke-dasharray":6450,
      "stroke-opacity":1
    });

    var animator = {
      stepNum1 : 6450 ,
      stepNum2 : 6450 ,
      stepNum3 : 6450 ,
      stepNum4 : 0 ,
    }
    $(animator).animate({
      stepNum1  : 0
    },{
      queue    : true,
      duration : 2000,
      step:function(now, fx){
        var a = Math.round(fx.now);
        $("#bgbot").css("stroke-dashoffset", a )
        $("#bgtop").css("stroke-dashoffset", a )
      }
    }).animate({
      stepNum2  : 0
    },{
      queue    : true,
      duration : 4000,
      step:function(now, fx){
        var a = Math.round(fx.now);
        $("#tree").css("stroke-dashoffset", a );
        $("#root").css("stroke-dashoffset", a );
      }
    }).animate({
      stepNum4  : 10000
    },{
      queue    : true,
      duration : 2000,
      step:function(now, fx){
        var a = Math.round(fx.now)/10000;

        $("#bgbot").css({
          "fill": "#14b9b4" ,
          "fill-opacity": a
        });
        $("#tree").css({
          "stroke": "none",
          "fill": "#14b9b4" ,
          "fill-opacity": a
        });

        console.log(1-a);
        console.log("printing A: " + a);

        $("#root").css({
          "stroke": "none",
          fill: "#fff" ,
          "fill-opacity": a,
          "stroke-opacity": 1-a
        });
        if (a == 1){
          $(document).trigger("animationFinished");
        }
      }
    });
  }

  function loadPage(){
    $("svg").fadeOut("fast");
    $(".wrapper.multipage").fadeIn("slow");
  }

  if (sessionStorage.getItem('animou') !== 'ja') {   growingTree(); }
  sessionStorage.setItem('animou', 'ja');

  $(document).on("animationFinished", function() {
    loadPage();
  });

});
