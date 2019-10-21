// $('section h4').click(function(event) {
//   event.preventDefault();
//   $(this).addClass('active');
//   $(this).siblings().removeClass('active');

//   var ph = $(this).parent().height();
//   var ch = $(this).next().height();

//   if (ch > ph) {
//     $(this).parent().css({
//       'min-height': ch + 'px'
//     });
//   } else {
//     $(this).parent().css({
//       'height': 'auto'
//     });
//   }
// });

// function tabParentHeight() {
//   var ph = $('section').height();
//   var ch = $('section ul').height();
//   if (ch > ph) {
//     $('section').css({
//       'height': ch + 'px'
//     });
//   } else {
//     $(this).parent().css({
//       'height': 'auto'
//     });
//   }
// }

// $(window).resize(function() {
//   tabParentHeight();
// });

// $(document).resize(function() {
//   tabParentHeight();
// });
// tabParentHeight();



<button class="tablink" onclick="openCity('London', this, 'red')" id="defaultOpen">London</button>
<button class="tablink" onclick="openCity('Paris', this, 'green')">Paris</button>
<button class="tablink" onclick="openCity('Tokyo', this, 'blue')">Tokyo</button>
<button class="tablink" onclick="openCity('Oslo', this, 'orange')">Oslo</button>

<script>
function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}


$(document).ready(function(){
  
  var tabWrapper = $('#tab-block'),
      tabMnu = tabWrapper.find('.tab-mnu  li'),
      tabContent = tabWrapper.find('.tab-cont > .tab-pane');
  
  tabContent.not(':first-child').hide();
  
  tabMnu.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  tabContent.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  
  tabMnu.click(function(){
    var tabData = $(this).data('tab');
    tabWrapper.find(tabContent).hide();
    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
  });
  
  $('.tab-mnu > li').click(function(){
    var before = $('.tab-mnu li.active');
    before.removeClass('active');
    $(this).addClass('active');
   });
  
});