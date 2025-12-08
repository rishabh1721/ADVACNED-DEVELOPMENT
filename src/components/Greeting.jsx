const Greet = () => {
  const greet = "Hello, welcome to our site!";
  const date = new Date();
  return(
     <h1>{greet}
     <p>Date:{date.getDate()}</p>
     </h1>
     
)}
export default Greet;