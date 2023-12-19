

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const rotationStart = 100;
    if (scrollY >= rotationStart) {

      const rotation = (scrollY - rotationStart) / 10;
      document.querySelector('.deployment-service').style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    }
  });

window.addEventListener('scroll', function()
{
  var upbtn = this.document.getElementById("scrollToTopBtn");
  const scrollY = window.scrollY;
  console.log(scrollY);
  if(scrollY > 100)
  {
    upbtn.style.display = "block";
  }
  else
  {
    upbtn.style.display = "none";
  }
})


emailjs.init("user_your_user_id");


var params = {
  to_email: "vijayasankarsoftware@gmail.com",
  subject: "Subject of the email",
  message: "This is the body of the email."
};


function scrollToDiv(div) {
  var targetDiv = document.getElementById(`${div}`);
  targetDiv.scrollIntoView({ behavior: 'smooth' });
}

function SendMail()
{
  var email = document.getElementById("idEmail").value;
  var content = document.getElementById("idContentArea").value;
  var emailto = "vijayasankarsoftware@gmail.com"
  var mail = document.createElement("a");
  
  mail.setAttribute('href', `mailto:${emailto}?subject=From Portfolio&body=from: ${email}%0A${encodeURIComponent(content)}`);
  mail.click();
}

function downloadCV()
{
  var pdf = "./cv/Vijayasankar_CV.pdf";
  var atag = document.createElement('a');
  atag.href = pdf;
  atag.click();
}
