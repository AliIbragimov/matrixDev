$(document).ready(function() {
    $('.borehole').click(function() {
        if ($(this).find('div').hasClass('active')) {
            $(this).find('div').removeClass('active');
            $(this).removeClass('activeBorehole');
        } else {
            $(this).addClass('activeBorehole');
            $(this).find('div').addClass('active');
        }
    });
});

const obj = {
    number: null,
    borehole: null,
    matrix: null
};

$('#boreholeId').change(function() {
    const selectedValue = $(this).val();
    const selectedText = $(this).find(':selected').text();
    obj.borehole = selectedText;
});

$('#matrixId').change(function() {
    const selectedValue = $(this).val();
    const selectedText = $(this).find(':selected').text();
    obj.matrix = selectedText;
});

$('#buttonStart').click(function() {
    const numberHole = $('#inputId').val();
    obj.number = numberHole;
})