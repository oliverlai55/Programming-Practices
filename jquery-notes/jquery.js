jQuery


toggle
.attr
.html
document.ready
$(document).ready(function(){

});
toggle function

.animate
animate() method is used to create custom animations
$(selector).animate({params}, speed, callback);

for example:
$('button').click(function(){
	$('div').animate({left: '250px'});
});

$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 

//use it for toggle when button clicked
    $("button").click(function(){
        $("div").animate({
            height: 'toggle',
            width: 'toggle'
        });
    });
 // the html div
 // <div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>
.css
.onclick


