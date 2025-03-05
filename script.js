document.addEventListener("DOMContentLoaded", function () {
    var pages = document.querySelectorAll(".page");
    var nextBtns = document.querySelectorAll(".next-btn");
    var prevBtns = document.querySelectorAll(".prev-btn");
    var nextBtnFirst = document.querySelector(".firstNext");
    var prevBtnSec = document.querySelector(".prev-1");
    var nextBtnSec = document.querySelector(".next-1");
    var prevBtnThird = document.querySelector(".prev-2");
    var nextBtnThird = document.querySelector(".next-2");
    var prevBtnFourth = document.querySelector(".prev-3");
    var nextBtnFourth = document.querySelector(".next-3");
    var submitBtn = document.querySelector(".submit");
    var progressText = document.querySelectorAll(".step p");
    var progressCheck = document.querySelectorAll(".step .check");
    var bullets = document.querySelectorAll(".bullet");
    var current = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = i === index ? "block" : "none";
        });
    }
    showPage(current);

      function updateProgress(forward = true) {
        if (forward) {
            bullets[current]?.classList.add("active");
            progressCheck[current]?.classList.add("active");
            progressText[current]?.classList.add("active");
        } else {
            bullets[current]?.classList.remove("active");
            progressCheck[current]?.classList.remove("active");
            progressText[current]?.classList.remove("active");
        }
    }

    function validatePage(index = current) {
        let inputs = pages[index].querySelectorAll("input[required], select[required]");
        let valid = true;

        inputs.forEach((input) => {
            let label = input.closest("label") || input.parentNode.querySelector("label");
            if (!label) return;

            let errorSpan = label.querySelector(".error-message");
            if (!errorSpan) {
                errorSpan = document.createElement("span");
                errorSpan.classList.add("error-message");
                errorSpan.style.color = "red";
                errorSpan.style.fontSize = "12px";
                errorSpan.style.marginLeft = "5px";
                label.appendChild(errorSpan);
            }

            if (!input.value.trim() || input.value === "default") {
                errorSpan.textContent = " * Required";
                valid = false;
            } else {
                errorSpan.textContent = "";
            }
        });

        return valid;
    }


    function moveNext() {
        if (!validatePage()) return;
        if (current < pages.length - 1) {
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

   
    nextBtnFirst?.addEventListener("click", (event) => {
        event.preventDefault();
        moveNext();
    });
    nextBtnSec?.addEventListener("click", (event) => {
        event.preventDefault();
        moveNext();
    });
    nextBtnThird?.addEventListener("click", (event) => {
        event.preventDefault();
        moveNext();
    });
    nextBtnFourth?.addEventListener("click", (event) => {
        event.preventDefault();
        moveNext();
    });

    prevBtnSec?.addEventListener("click", (event) => {
        event.preventDefault();
        movePrev();
    });
    prevBtnThird?.addEventListener("click", (event) => {
        event.preventDefault();
        movePrev();
    });
    prevBtnFourth?.addEventListener("click", (event) => {
        event.preventDefault();
        movePrev();
    });

    submitBtn?.addEventListener("click", function () {
        if (!validatePage()) return;
        updateProgress();
        setTimeout(function () {
            alert("Your Form Successfully Signed up");
            location.reload();
        }, 800);
    });

    // 🟢 Click on number bullets to go back
  bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", function () {
            if (index <= current) {
                current = index;
                showPage(current);
            } else {
                let allValid = true;
                for (let i = 0; i < index; i++) {
                    if (!validatePage(i)) {
                        allValid = false;
                        break;
                    }
                }
                if (allValid) {
                    current = index;
                    showPage(current);
                }
            }
        });
    });
            
    document.querySelectorAll("select[required]").forEach((select) => {
        select.addEventListener("change", function () {
            let label = this.closest("label") || this.parentNode.querySelector("label");
            let errorSpan = label ? label.querySelector(".error-message") : null;
             if (this.value.trim()) {
                errorSpan.textContent = ""; // Clear error if a valid option is selected
            }
        });
    });

    document.querySelectorAll("input[required]").forEach((input) => {
        input.addEventListener("input", function () {
            let label = this.closest("label") || this.parentNode.querySelector("label");
            let errorSpan = label ? label.querySelector(".error-message") : null;
            if (errorSpan) {
                errorSpan.textContent = "";
            }
        });
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
