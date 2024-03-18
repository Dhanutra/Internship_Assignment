const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let initial_count = 0;
  const final_count = parseInt(counter.getAttribute("data-count"));
  const duration = 1000;
  const step = final_count / duration;

  const counting = setInterval(updateCounting, 1);

  function updateCounting() {
    initial_count = initial_count + step;
    counter.innerText = Math.floor(initial_count);

    if (initial_count >= final_count) {
      clearInterval(counting);
      counter.innerText = final_count;
    }
  }
});



function showAll() {
    document.querySelectorAll('.img-fluid').forEach(img => img.parentNode.style.display = 'block');
}

function showBranding() {
    document.querySelectorAll('.img-fluid').forEach(img => img.parentNode.style.display = 'none');
    document.querySelectorAll('.branding').forEach(img => img.parentNode.style.display = 'block');
}

function showDesign() {
    document.querySelectorAll('.img-fluid').forEach(img => img.parentNode.style.display = 'none');
    document.querySelectorAll('.design').forEach(img => img.parentNode.style.display = 'block');
}

function showPhoto() {
    document.querySelectorAll('.img-fluid').forEach(img => img.parentNode.style.display = 'none');
    document.querySelectorAll('.photo').forEach(img => img.parentNode.style.display = 'block');
}

function showCoffee() {
    document.querySelectorAll('.img-fluid').forEach(img => img.parentNode.style.display = 'none');
    document.querySelectorAll('.coffee').forEach(img => img.parentNode.style.display= 'block');
}