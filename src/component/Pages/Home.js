import React from 'react';
const styles = {
  footer:{
   display: "flex",
   justifyContent:"space-around",
   
  }
};

export default function Home() {
  return (
    <div>
      {/* all html goes here */}
      <h1>Action Moments
        We capture the Action you enjoy the Moments </h1>
      
      
      <footer style={styles.footer}> 
        {/* footer will follow with the styles class thats been set  */}

      </footer>
    </div>
  );
}
