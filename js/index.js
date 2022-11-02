window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      window.location.href = 'thanks.html';
    })
  });
});

VanillaTilt.init(document.querySelector(".angel"), {
  max: 25,
  speed: 400
});


VanillaTilt.init(document.querySelectorAll(".angel"));