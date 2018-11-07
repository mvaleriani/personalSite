// Ajax Form for Vedea tamplate
// "use strict";


$("#contactForm").validator().on("submit", function (event) {
    console.log('submit pressed')
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "");
    } else {
        // everything looks good!
        console.log('about to submit');
        
        event.preventDefault();
        
        submitForm();
        
    }
});







function submitForm(){
    console.log('submitting...');
    
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // var nodemailer = require('nodemailer');
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'youremail@gmail.com',
    //         pass: 'yourpassword'
    //     }
    // });

    // var mailOptions = {
    //     from: email,
    //     to: 'michaelvaleriani@gmail.com',
    //     subject: `Email From Personal Site: ${name}`,
    //     text: message
    // };
    // console.log(mailOptions);
    

    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });

    // debugger







    // $.ajax({
    //     type: "POST",
    //     url: "assets/php/form-process.php",
    //     data: "name=" + name + "&email=" + email + "&message=" + message,
    //     success : function(text){
    //         if (text == "success"){
    //             formSuccess();
    //         } else {
    //             formError();
    //             submitMSG(false,text);
    //         }
    //     }
    // });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    console.log('failed');
    
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h5 fadeIn animated text-success";
    } else {
        var msgClasses = "h5 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}