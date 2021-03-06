function sendMail(contactForm){
    //Email JS template details
    //takes values from form inputs and sends queries to test email address 
    emailjs.send("keelan.dev.test@gmail.com", "classified_records", {
        "from_name": contactForm.name1.value,
        "from_email":contactForm.email1.value,
        "new_message": contactForm.query1.value,        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("Failed", error);
        });
    return false;
}