$(function(){
    $( "#new_panel" ).on( "click", function() {
    
       var abcd =  jsPanel.create({
            resizeit: {disable: true},
            headerControls: 'closeonly xs',
            position: 'center 50 50',        
            theme:       'danger',
            borderRadius: 6,
            panelSize: '470 330',  
            headerTitle: "Scientific Calculator",
            content:     "<iframe src='cal/calc.php' frameborder='0'  style='background-color: #dadada; width:500px; height:295px;'></iframe>",     
            position:    'center-top 0 58',
            contentSize: '450 250',
            onclosed: [
              function () {
              console.log('1st callback');
              $( "#new_panel" ).prop( "disabled", false );
              return true;
            }],
    
            callback: function (panel) {
                this.content.style.padding = '0px';
                panel.setControlStatus('minimize', 'remove');
                panel.setControlStatus('maximize', 'remove');
                 

                $(".jsPanel-titlebar").on('click', '.btnHlp',  function () {
                  panel.content.innerHTML = "<iframe src='cal-help.php' frameborder='0'  style='background-color: #dadada; width:470px; height:295px;'></iframe>";
               });

                $(".jsPanel-titlebar").on('click', '.btnClose', function () {
                  panel.content.innerHTML = "<iframe src='cal/calc.php' frameborder='0'  style='background-color: #dadada; width:500px; height:295px;'></iframe>";
               });
            },


        });

        $(".jsPanel-titlebar").append("<button class='btnHlp btn btn-primary btn-xs' onclick='abcd()'>Help</button>");
        
   });


});
function abcd(){
   $(".btnHlp").hide();
   $(".jsPanel-titlebar").append("<button class='btnClose btn btn-primary btn-xs'  onclick='abcd1()'>Back</button>");
}
function abcd1(){
   $(".btnClose").hide();
   $(".jsPanel-titlebar").append("<button class='btnHlp btn btn-primary btn-xs'  onclick='abcd()'>Help</button>");
}