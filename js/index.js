var modal = document.querySelector(".kiel-modalslider");
var modalButtonLeft = document.querySelector(".kiel-modalslider_button--left");
var modalButtonRight = document.querySelector(".kiel-modalslider_button--right");
var portfolioItems = document.querySelectorAll(".kiel-portfolio_item");
var modalImage = document.querySelector(".kiel-modalslider_image");
var modalClose = document.querySelector(".kiel-modalslider_closeBtn");
var modalName = document.querySelector("[data-modalcontent='name']");
var modalOEM = document.querySelector("[data-modalcontent='OEM']");
var modalBetreiber = document.querySelector("[data-modalcontent='betreiber']");
var modalModel = document.querySelector("[data-modalcontent='model']");
var modalCount = document.querySelector("[data-modalcontent='count']");
var modalRange = document.querySelector("[data-modalcontent='range']");
var ModalContent = /** @class */ (function () {
    function ModalContent() {
    }
    ModalContent.prototype.setValues = function (dataSet) {
        this.name = dataSet.name;
        this.oem = dataSet.oem;
        this.betreiber = dataSet.betreiber;
        this.model = dataSet.model;
        this.count = dataSet.count;
        this.range = dataSet.range;
        this.image = dataSet.image;
        this.current = parseInt(dataSet.number);
    };
    ModalContent.prototype.updateModal = function () {
        modalName.innerHTML = this.name;
        modalOEM.innerHTML = this.oem;
        modalBetreiber.innerHTML = this.betreiber;
        modalModel.innerHTML = this.model;
        modalCount.innerHTML = this.count;
        modalRange.innerHTML = this.range;
        modalImage.style.backgroundImage = "url(" + this.image + ")";
    };
    ModalContent.prototype.getCurrent = function () {
        return this.current;
    };
    return ModalContent;
}());
//instance
var Content = new ModalContent();
portfolioItems.forEach(function (element) {
    element.addEventListener("click", function () {
        modal.classList.add("shown");
        Content.setValues(element.dataset);
        Content.updateModal();
        return;
    });
});
modalButtonLeft.addEventListener("click", function () {
    var current = Content.getCurrent();
    if (typeof current !== undefined && current > 1) {
        var previous = current - 1;
        var nextUp = document.querySelector("[data-number=\"" + previous + "\"]");
        if (nextUp)
            Content.setValues(nextUp.dataset);
        Content.updateModal();
    }
});
modalButtonRight.addEventListener("click", function () {
    var current = Content.getCurrent();
    if (typeof current !== undefined && current < 15) {
        var next = current + 1;
        var nextUp = document.querySelector("[data-number=\"" + next + "\"]");
        if (nextUp)
            Content.setValues(nextUp.dataset);
        Content.updateModal();
    }
});
modalClose.addEventListener("click", function () {
    modal.classList.remove("shown");
    return;
});
// Get Data Attributes from elements
