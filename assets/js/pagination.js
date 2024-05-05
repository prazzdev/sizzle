$(document).ready(() => {
    var boxesPerPage = 6;
    const showBoxes = (pageNumber) => {
        var startIndex = (pageNumber - 1) * boxesPerPage;
        var endIndex = startIndex + boxesPerPage;

        $("#box-container .col-6").hide(); 
        $("#box-container .col-6").slice(startIndex, endIndex).show(); 

        if (pageNumber === 1) {
            $("html, body").animate({ scrollTop: 0 }, 500);
        } else {
            $("html, body").animate({ scrollTop: $("#box-container .col-6").first().offset().top }, 500);
        }
    }

    var totalBoxes = $("#box-container .col-6").length;
    var totalPages = Math.ceil(totalBoxes / boxesPerPage);

    $(".page-link").on("click", () => {
        var pageNumber = parseInt($(this).text());
        showBoxes(pageNumber);
        return false;
    });
    // Next button
    $(".prev").on("click", () => {
        var currentPage = parseInt($(".pagination .active .page-link").text());
        if (currentPage > 1) {
            showBoxes(currentPage - 1);
        }
        return false;
    });
    // Prev button
    $(".next").on("click", () => {
        var currentPage = parseInt($(".pagination .active .page-link").text());
        if (currentPage < totalPages) {
            showBoxes(currentPage + 1);
        }
        return false;
    });

    showBoxes(1);     
});
