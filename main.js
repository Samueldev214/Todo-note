$(document).ready(function (){
  $('#text').change(function (){
    var input = $(this).val();
    $('ul').append('<li> ' + input + '<iconify-icon class="check" icon="mingcute:check-fill"></iconify-icon> <iconify-icon class="trash" icon="mdi:trash-can"></iconify-icon> </li>');
    $(this).val('');
  });
  
  $('ul').on('click','.trash',function (){
    $(this).parent('li').fadeOut('slow');
  });
  
  $('ul').on('click','.check',function (){
    $(this).parent('li').toggleClass('checked');
  });
});