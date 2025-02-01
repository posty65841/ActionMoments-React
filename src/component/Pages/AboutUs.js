import React from 'react';
const styles = {
  footer:{
   display: "flex",
   justifyContent:"space-around",
   
  }
};

export default function AboutUs() {
  return (
    <div>

{/* all html goes here */}
      <h2>About Us </h2>
      <p>
      “We capture the Action,
	While you enjoy the Moments”
Action Moments was founded in 2002 by Brian Hamfeldt. Having four daughters that competed in a variety of sports he would often go to competitions and photograph his children and their teams. Quickly, he saw the desire for high quality photography at sporting events so every parent and athlete could go home with perfect memories. For over 20 years Action Moments has grown having photographed cheer, dance, gymnastics, baseball, softball, and golf competitions. As of 2021, Action Moments only provide FREE PHOTOS! We work directly with event producers to ensure that our high quality photos are part of you competition experience.
[SPONSORSHIP]
Since 2012, Action Moments has been a proud sponsor of the USASF Senior Athlete Scholarship. For over 10 years we have helped sponsor over 20 (???) athletes with scholarships at the WORLDS Cheer and Dance.
         

      


      </p>
      <footer style={styles.footer}> 
        {/* footer will follow with the styles class given  */}

      </footer>

    </div>
  );
}
