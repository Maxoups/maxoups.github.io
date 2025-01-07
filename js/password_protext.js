

password_protection();

function password_protection() {
    var o = document.getElementById('protect-overlay');
    o.getElementsByTagName('form')[0].onsubmit = function() {
      
      // `NzMwOA==` => `7308`
      if (this.answer.value === atob('NzMwOA==')) {
        // o.style.display = "none";
        console.log(this.answer.value + ": correct password!");
        window.location.replace("arg_7308.html");
      } else {
        console.log(this.answer.value + ": wrong password!");
        alert('Wrong password!');
      }
      return false;
    };
  }