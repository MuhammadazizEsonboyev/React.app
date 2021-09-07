
function Section() {
    const h1style = {
      color: "black",
      boxShadow: "1px 1px 12px black",
      fontSize: "40px",
      textAlign: "center",
  
  
    }
    const Doctor = {
      color: "blue",
      fontSize: "32px",
      textAlign: "center",
      fontFamiliy: "Roboto sans-serif",
    }
    return (
      <div className="Section">
        <h1 style={h1style}>Hello Section js File    </h1>
        <p style={Doctor}>He is a Doctor</p>
      </div>
  
    );
  
  }
  
  export default Section;
  
  