



setTimeout(function()
{
    document.getElementById("CV").innerHTML = '<a href="media/CV.pdf" download="CV.pdf"><Strong>Download CV<strong></a>';
}
,17500);



function myFunction(x) {
    x.classList.toggle("change");
  }

  document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-items').classList.toggle('show');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('fade'));
});