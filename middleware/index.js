var nodemailer = require("nodemailer");
var middlewareObj = [];

middlewareObj.sendMail = function(req, res, next){
    
    var transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.FROMEMAIL,
            pass: process.env.PASS
        }
    });
    
    var mailOptions = {
        from: process.env.FROMEMAIL,
        to: process.env.TOEMAIL,
        subject: "NEW WORK REQUEST FROM: " + req.body.contact.firstName + " " + req.body.contact.lastName,
        html: generateBody(req.body)
    };
    
    transporter.sendMail(mailOptions, function(err, info){
        if(err) {
            req.flash("error", "Whoops! Something went wrong with sending the email. Please try again or contact us at our work number.");
            res.redirect("back");
        } else {
            req.flash("success", "Thank you for contacting Third Day Builders! We will respond to your inquiry as soon as possible.");
            next();
        }
    });
    
};

function generateBody(info){
    var emailBody = `
    <h3>Customer Details</h3>
    
    <ul>
        <p>Name:  ${info.contact.firstName} ${info.contact.lastName}</p>
        <p>Email: ${info.contact.email}</p>
        <p>Phone: ${info.contact.phone}</p>
    </ul>
    
    
    <h3>Customer Address</h3>
    
    <ul>
        <p>${info.contact.streetAddress}<br>${info.contact.city}, ${info.contact.state} ${info.contact.zipCode}</p>
    </ul>
    
    
    <h3>Type of Work</h3>
    
    <ul>
        <p>Build a Custom Home: <strong>${info.chkCustom ? "YES" : "NO"}</strong></p>
        <p>Remodel a Home: <strong>${info.chkRemodel ? "YES" : "NO"}</strong></p>
        <p>Addition to Home: <strong>${info.chkAddition ? "YES" : "NO"}</strong></p>
    </ul>
    
    
    <h3>Requested Work Details</h3>
    
    <ul>
        <p>Project Budget: ${info.contact.budget}</p>
        <p>Further Detail: </p>
        <p>${info.contact.furtherInfo}</p>
    </ul>
    `;
    return emailBody;
}

module.exports = middlewareObj;