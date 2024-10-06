(function(){
    emailjs.init({
    publicKey: "hHGezdEe5M16T3yJ2",
});
})();

function SendMail(e){
    e.preventDefault();
    const params ={
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    emailjs.send("service_jinwk1n", "template_m0saz8m", params)
    .then( () =>{
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log("Success!");
    }, (error)=> {console.log(error)}
);
   
}
