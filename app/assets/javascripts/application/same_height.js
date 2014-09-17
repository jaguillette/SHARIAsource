(function() {
  var $document = $(document)

  function sameHeight() {
    console.log('hi')
    $('.js-same-height-container').each(function() {
      var $items = $(this).find('.js-same-height')
      $items.css('height', 'auto')
      var heights = $.map($items.get(), function(item) {
        return $(item).height()
      })
      var maxHeight = Math.max.apply(null, heights)
      $items.height(maxHeight)
    })
  }

  $document.on('page:change', sameHeight)
  $document.on('sameheight:refresh', sameHeight)
}())
