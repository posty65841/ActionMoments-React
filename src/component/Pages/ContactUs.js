import React from 'react';
const styles = {
  footer:{
   display: "flex",
   justifyContent:"space-around",
   
  }
};

export default function ContactUs() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="container">
  <h1>Contact Info</h1>
  <form target="_blank" action="https://formsubmit.co/2fa02494dbd89430fddb07ab17cddef9" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
        </div>
        <div className="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>


<footer style={styles.footer}> 
  {/* footer will follow with the styles class that has been set  */}

      </footer>

    </div>
  );
}
