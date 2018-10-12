<!DOCTYPE HTML>

<html>

<head>
    <title>Contact - Third Day Builders</title>
    <link rel="stylesheet" type="text/css" href="../css/stylesheet.css">
    <script src="../js/script.js"></script>
    <link href="../img/logo/mainlogo_title.ico" type="image/ico" rel="shortcut icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Playfair Display SC' rel='stylesheet'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

    <nav>
        <a href="../index.html" class="logo">
        </a>
        <div class="outerMenu">
            <a href="#" class="icon" onclick="mobileNav()"><i class="fa fa-bars"></i></a>
            <div class="innerMenu">
                <a href="../index.html">Home</a>
                <a href="../about.html">About</a>
                <a href="../gallery.html">Gallery</a>
                <a href="../testimonials.html">Testimonials</a>
                <a href="../contact.html">Contact</a>
            </div>
        </div>
    </nav>

    <main class="wrapper">
        <header class="jumbotronTextSent">
            <div>

    <?php
    $firstName = "Markee";
    $lastName = "Smith";
    $streetAddress1 = "2000 Merchants Row Blvd";
    $city = "Tallahassee";
    $state = "Florida";
    $zipCode = "32311";
    $phone = "304-283-4567";
    $email = "markee.j.smith@gmail.com";
    $customerInformation = "Customer Name: $firstName $lastName </br></br>
    Customer Address: </br>
    $streetAddress1 </br>
    $city, $state $zipCode </br></br>
    Customer Phone Number: $phone </br></br>
    Customer Email: $email</br></br>";




    $isCustomHome = true; 
    $doesOwnLand = true;
    $isRemodel = false;
    $isAddition = false;

    $projectType = "The customer is requesting the following type of work: </br></br>";
    $customHome = "1) Custom Home Build: " ;
    $remodel = "2) Remodel: ";
    $addition = "3) Addition: ";

    if($isCustomHome == TRUE) {
        $typeLand = "";
        if($doesOwnLand) {
            $typeLand = $typeLand . "This customer <b>DOES</b> own their own land.";
        }
        else {
            $typeLand = $typeLand . "This customer <b>DOES NOT</b> own their own land.";
        }
        $customHome = $customHome . "Yes. $typeLand </br>";
    }
    else {
        $customHome = $customHome . "No. </br>";
    }

    if ($isRemodel == TRUE) {
        $remodel = $remodel . "Yes. </br>";
    }
    else {
        $remodel = $remodel . "No. </br>";
    }
    if ($isAddition == TRUE) {
        $addition = $addition . "Yes. </br>";
    }
    else {
        $addition = $addition . "No. </br>";
    }
    $projectType = $projectType . $customHome . $remodel . $addition;




    $budget = "$30000";
    $furtherInfo = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";


    $projectDetail = "Here are the details of the project that the customer has provided: </br></br>
    Project Budget: $budget </br></br>
    Further Project Information: </br> $furtherInfo";

    $subject = "New Work Request From: $firstName $lastName";

    $message = "<b><u>CUSTOMER INFORMATION:</u></b></br></br>" . $customerInformation . "</br></br>" . "<b><u>TYPE OF WORK REQUESTED:</u></b></br></br>" . $projectType . "</br></br>" . "<b><u>PROJECT DETAILS:</u></b></br></br>" . $projectDetail;
    $message = wordwrap($message, 70);

    $successfulSend = mail("markee.j.smith@gmail.com", $subject, $message);
    if($successfulSend == TRUE){
        echo "<h2>Thank you for your interest in my services. I will review your request and reach out to you shortly.</h2>";
    }

    else {
        echo "<h2>Oops. Something went wrong. Please try again or contact me at (###)-###-####</h2>";
    }
    ?>
        </div>
    </header>

    <footer>
        <p>Copyright &copy; 2017 Third Day Builders, LLC. <br/> All rights reserved.</p>
    </footer>

    </main> 

</body>
    
</html>


