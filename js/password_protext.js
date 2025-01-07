


async function hashSHA256(input) {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}


console.log("hashForm = " + document.getElementById('hashForm'))
// Handle form submission
document.getElementById('hashForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from reloading the page
    const inputText = document.getElementById('inputText').value; // Get input value
    const hash = await hashSHA256(inputText); // Hash the input
    console.log("input value : " + inputText + " ; hashed Value:", hash);
    if (hash == 'abba884411e3b916a2e4e7f5bfae98964f9b3fc98d16e5ce28ba8d5103e29de0') {
        console.log("Correct Password!");
        window.location.replace("arg_"+ inputText +".html");
    } else {
        console.log("Wrong Password!");
        alert('Wrong password!');
    }
});




`


function password_protection() {
    // key = 7308
    var o = document.getElementById('protect-overlay');
    o.getElementsByTagName('form')[0].onsubmit = (async () => {
        const hashedValue = await hashSHA256(this.answer.value);
        console.log("Hashed Value:", hashedValue);
        if (hashedValue == 'abba884411e3b916a2e4e7f5bfae98964f9b3fc98d16e5ce28ba8d5103e29de0') {
            console.log("Correct Password!");
            window.location.replace("arg_"+ this.answer.value +".html");
        } else {
            console.log("Wrong Password!");
            alert('Wrong password!');
        }
        return false;
    })();
  }



function password_protectionOLD() {
    var o = document.getElementById('protect-overlay');
    o.getElementsByTagName('form')[0].onsubmit = function() {
      if (hashSHA256(this.answer.value) == 'abba884411e3b916a2e4e7f5bfae98964f9b3fc98d16e5ce28ba8d5103e29de0') {
        console.log(this.answer.value + ": correct password!");
        window.location.replace("arg_"+ this.answer.value +".html");
      } else {
        console.log(this.answer.value + ": wrong password!");
        alert('Wrong password!');
      }
      return false;
    };
  }`

