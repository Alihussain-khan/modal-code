(function ($) {

  $(function () {
    var $modal = $('#imageModal');
    var $dialog = $modal.find('.modal__dialog');

    function openModal() {
      $modal.addClass('is-open').attr('aria-hidden', 'false');
      $('body').css('overflow', 'hidden');
      $dialog.attr('tabindex', '-1').focus();
    }
    function closeModal() {
      $modal.removeClass('is-open').attr('aria-hidden', 'true');
      $('body').css('overflow', '');
      $('#openModalLink').trigger('focus');
    }

    $('#openModalLink, #openModalImage').on('click', function (e) {
      e.preventDefault();
      openModal();
    });
    $modal.on('click', function (e) {
      if ($(e.target).is('.modal__backdrop')) closeModal();
    });
    $modal.find('.modal__close').on('click', closeModal);

    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && $modal.hasClass('is-open')) closeModal();
    });
  });
})(jQuery);
