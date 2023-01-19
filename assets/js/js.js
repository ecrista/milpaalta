// Custom theme code
$( document ).ready(function() {
//     $("img").click(function(){
//     var src=$(this).attr("src");
//     Swal.fire({
//       imageUrl: src,
//        height:"100%"
//     })
// })
    (function() {
  var $lightbox = $("<div class='lightbox'></div>");
  var $img = $("<img>");
  var $caption = $("<p class='caption'></p>");

  // Add image and caption to lightbox

  $lightbox
    .append($img)
    .append($caption);

  // Add lighbox to document

  $('body').append($lightbox);

  $('.lightbox-gallery img').click(function(e) {
    e.preventDefault();

    // Get image link and description
    var src = $(this).attr("src");
    var cap = $(this).attr("alt");

    // Add data to lighbox

    $img.attr('src', src) ;
    if($img[0].width>$img[0].height){
        $img.attr('width', "55%");
        $img.attr('height', "auto");    
    }
    if($img[0].height>$img[0].width){
        $img.attr('width', "auto");
        $img.attr('height', "75%");    
    }
    
    $img.css('margin-top', "9%");
    $caption.text(cap);

    // Show lightbox

    $lightbox.fadeIn('fast');

    $lightbox.click(function() {
      $lightbox.fadeOut('fast');
    });
  });

}());
});