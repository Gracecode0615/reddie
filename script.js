document.addEventListener("DOMContentLoaded", function () {
    var pages = document.querySelectorAll(".page");
    var nextButtons = document.querySelectorAll(".next-btn");
    var prevButtons = document.querySelectorAll(".prev-btn");
    var submitBtn = document.querySelector(".submit");
    var progressText = document.querySelectorAll(".step p");
    var progressCheck = document.querySelectorAll(".step .check");
    var bullet = document.querySelectorAll(".bullet");
    var current = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }
    showPage(current);

    function updateProgress(forward = true) {
        if (forward) {
            bullet[current]?.classList.add("active");
            progressCheck[current]?.classList.add("active");
            progressText[current]?.classList.add("active");
        } else {
            bullet[current]?.classList.remove("active");
            progressCheck[current]?.classList.remove("active");
            progressText[current]?.classList.remove("active");
        }
    }

    function validatePage() {
        var inputs = pages[current].querySelectorAll("input, select, textarea");
        var isValid = true;

        inputs.forEach(input => {
            let label = document.querySelector(`label[for='${input.id}']`);
            if (!label) return; // Skip if no label is found

            let existingAsterisk = label.querySelector(".error-symbol");
            if (!existingAsterisk) {
                existingAsterisk = document.createElement("span");
                existingAsterisk.classList.add("error-symbol");
                existingAsterisk.style.color = "red";
                existingAsterisk.style.marginLeft = "5px";
                existingAsterisk.style.fontSize = "18px";
                label.appendChild(existingAsterisk);
            }

            if (input.tagName === "SELECT" && input.value === "") {
                existingAsterisk.textContent = " *";  // Show asterisk for required selects
                isValid = false;
            } else if (input.value.trim() === "") {
                existingAsterisk.textContent = " *";  // Show asterisk for empty fields
                isValid = false;
            } else {
                existingAsterisk.textContent = "";  // Remove asterisk if input is valid
            }
        });

        return isValid;
    }

    function moveNext() {
        if (validatePage()) {
            updateProgress();
            current++;
            showPage(current);
        }
    }

    function movePrev() {
        if (current > 0) {
            updateProgress(false);
            current--;
            showPage(current);
        }
    }

    nextButtons.forEach(button => button.addEventListener("click", (event) => {
        event.preventDefault();
        moveNext();
    }));

    prevButtons.forEach(button => button.addEventListener("click", (event) => {
        event.preventDefault();
        movePrev();
    }));

    submitBtn?.addEventListener("click", function () {
        if (validatePage()) {
            updateProgress();
            setTimeout(function () {
                alert("Your Form Successfully Signed Up");
                location.reload();
            }, 800);
        }
    });
});



//document.addEventListener("DOMContentLoaded", function () {
//    var pages = document.querySelectorAll(".page");
//    var nextBtnFirst = document.querySelector(".firstNext");
//    var prevBtnSec = document.querySelector(".prev-1");
//    var nextBtnSec = document.querySelector(".next-1");
//    var prevBtnThird = document.querySelector(".prev-2");
//    var nextBtnThird = document.querySelector(".next-2");
//    var prevBtnFourth = document.querySelector(".prev-3");
//    var nextBtnFourth = document.querySelector(".next-3");
//    var submitBtn = document.querySelector(".submit");
//    var progressText = document.querySelectorAll(".step p");
//    var progressCheck = document.querySelectorAll(".step .check");
//    var bullet = document.querySelectorAll(".bullet");
//    var current = 0; // Start from first page
//
//    // Hide all pages and show only the active one
//    function showPage(index) {
//        pages.forEach((page, i) => {
//            if (i === index) {
//                page.classList.add("active-page"); // Mark as active
//                page.style.display = "block";
//            } else {
//                page.classList.remove("active-page");
//                page.style.display = "none";
//            }
//        });
//    }
//    showPage(current); // Show the first page initially
//
//    function updateProgress(forward = true) {
//        if (forward) {
//            bullet[current]?.classList.add("active");
//            progressCheck[current]?.classList.add("active");
//            progressText[current]?.classList.add("active");
//        } else {
//            bullet[current]?.classList.remove("active");
//            progressCheck[current]?.classList.remove("active");
//            progressText[current]?.classList.remove("active");
//        }
//    }
//
//    function moveNext() {
//        if (current < pages.length - 1) {
//            updateProgress();
//            current++;
//            showPage(current);
//        }
//    }
//
//    function movePrev() {
//        if (current > 0) {
//            updateProgress(false);
//            current--;
//            showPage(current);
//        }
//    }
//
//    nextBtnFirst?.addEventListener("click", (event) => {
//        event.preventDefault();
//        moveNext();
//    });
//    nextBtnSec?.addEventListener("click", (event) => {
//        event.preventDefault();
//        moveNext();
//    });
//    nextBtnThird?.addEventListener("click", (event) => {
//        event.preventDefault();
//        moveNext();
//    });
//    nextBtnFourth?.addEventListener("click", (event) => {
//        event.preventDefault();
//        moveNext();
//    });
//
//    prevBtnSec?.addEventListener("click", (event) => {
//        event.preventDefault();
//        movePrev();
//    });
//    prevBtnThird?.addEventListener("click", (event) => {
//        event.preventDefault();
//        movePrev();
//    });
//    prevBtnFourth?.addEventListener("click", (event) => {
//        event.preventDefault();
//        movePrev();
//    });
//
//    submitBtn?.addEventListener("click", function () {
//        updateProgress();
//        setTimeout(function () {
//            alert("Your Form Successfully Signed up");
//            location.reload();
//        }, 800);
//    });
//});
