var subButton = document.querySelector("input[type=\"submit\"]")
var modal = document.querySelector(".sent-modal-wrapper")

subButton.addEventListener("click", function() {
    modal.classList.add("show-modal")

    document.querySelector("#next").setAttribute('value', "https://unifieddashboard.td.reubenhu.my.id/contact")
})