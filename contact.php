<?php
$action = $_REQUEST['action'];
if ($action == "contact.php")    /* display the contact form */ {
?>
    <form action="contact.php" method="POST" enctype="multipart/form-data" target="_blank">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
            <div class="w3-half">
                <input class="w3-input w3-border" type="name" placeholder="Name" required name="Name">
            </div>
            <div class="w3-half">
                <input class="w3-input w3-border" type="email" placeholder="Email" required name="Email">
            </div>
        </div>
        <input class="w3-input w3-border" type="message" placeholder="Message" required name="Message">
        <button class="w3-button w3-black w3-right w3-section" type="submit" value="submit">
            <i class="fa fa-paper-plane"></i> SEND </button>
    </form>
<?php
} else                /* send the submitted data */ {
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];
    if (($name == "") || ($email == "") || ($message == "")) {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
    } else {
        $from = "From: $name<$email>\r\nReturn-path: $email";
        $subject = "Message successfully sent! Thank you and I'll get back to you asap!";
        mail("erikayidesign@gmail.com", $subject, $message, $from);
        echo "Email sent!";
    }
}
?>