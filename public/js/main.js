button = document.querySelector('button')
button.addEventListener('click', check)

function check() {
    string = document.querySelector("input").value;
    fetch(`/api?pal=${string}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.answer)
            if (data.answer === "yes") {
                document.querySelector('p').innerHTML = `"${string}" is  a Palindrome`
            } else {
                document.querySelector('p').innerHTML = `"${string}" is not a Palindrome`
            }
        });
}