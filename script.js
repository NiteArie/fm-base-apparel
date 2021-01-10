const app = (() => {
    const _form = document.querySelector(".container__content__main__form");
    const _emailInput = document.querySelector(".container__content__main__form__email");
    const _emailError = document.querySelector(".container__content__main__error");
    const _regex = /^\S+@\S+$/;

    _form.addEventListener("submit", (event) => {
        event.preventDefault();

        let email = _emailInput.value;

        if (validEmail(email)) {
            hideEmailError();
        } else {
            showEmailError();
        }
        
    })

    function validEmail(email) {
        return _regex.test(email);
    }

    function showEmailError() {
        _emailError.classList.remove("hidden");
        _emailInput.classList.add("error");
    }

    function hideEmailError() {
        _emailError.classList.add("hidden");
        _emailInput.classList.remove("error");
    }


})()