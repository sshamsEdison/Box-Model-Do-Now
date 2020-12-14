$('#margin').on('input', function(e) {
    var newVal = e.target.value + "px";
    $(".target").css('margin', newVal);
    $(".margin-readout").text(newVal);
    $(".margin-readout").css('background-color', '#7af07e');
});

$('#padding').on('input', function(e) {
    var newVal = e.target.value + "px";
    $(".target").css('padding', newVal);
    $(".padding-readout").text(newVal);
    $(".padding-readout").css('background-color', '#7af07e');
});

$('#border').on('input', function(e) {
    var newVal = e.target.value + "px";
    $(".target").css('border-width', newVal);
    $(".border-readout").text(newVal);
    $(".border-readout").css('background-color', '#7af07e');
});

$('#content').on('input', function(e) {
    var self = $(this);
    $(".target span").text(self.val());
});