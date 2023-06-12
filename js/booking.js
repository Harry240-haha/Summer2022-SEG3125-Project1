$(function() {

    // Handle Next button click
    $('.card-footer .btn-primary#nextBtn').click(function() {
      nextStep();
    });
  
    // Handle Previous button click
    $('.card-footer .btn-primary#previousBtn').click(function() {
      previousStep();
    });

    // Handle selections
    /// step1
    $('.service-btn').click(function() {
      $(this).toggleClass('selected');
    });
    /// step2
    $('.name-card').click(function() {
      $('.name-card').removeClass('selected');
      $(this).addClass('selected');
    });
    /// step3
    $('.timeTable-dayItem').click(function() {
      $('.timeTable-dayItem').removeClass('active');
      $(this).addClass('active');
    });
    $('.timeTable-everyDay .timeTable-row').click(function() {
      $('.timeTable-everyDay .timeTable-row').find('.timeTable-select').removeClass('selected');
      $(this).find('.timeTable-select').toggleClass('selected');
    });
  
  });

  function navigateToStep(stepId) {
    $('.nav-pills a[href="#' + stepId + '"]').tab('show');
  }
  
  function onSubmit(event) {
    $('#booking-success-modal').modal('show');
    event.preventDefault();
    return false;
  }