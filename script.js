(function(){
    emailjs.init({
    publicKey: "hHGezdEe5M16T3yJ2",
});
})();


const userSendTime = document.getElementById('send-time');
function SendMail(){
    // e.preventDefault();
    const params ={
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_jinwk1n", "template_m0saz8m", params)
    .then( () =>{
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        userSendTime.value = ""
        console.log("Success!");
    }, (error)=> {console.log(error)}
);
   
}

document.getElementById("send-email-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    const sendTime = userSendTime.value;

    const dateNow = new Date();
    const sendDate = new Date(dateNow.toDateString() + " "+ sendTime);

    const timeDifference = sendDate - dateNow;

    if (timeDifference <= 0) {
        messageDiv.textContent = 'Invalid send time. Please choose a future time.';
        return;
      }

      setTimeout(() => {
        SendMail();
        console.log('Email scheduled to be sent at ' + sendTime);
      }, timeDifference);
    })
