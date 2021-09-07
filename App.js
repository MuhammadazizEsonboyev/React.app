
function App() {
  const h1style = {
    color: "red",
    boxShadow: "1px 1px 12px black",
    fontSize: "40px",
    textAlign: "center",


  }
  const Doctor = {
    color: "green",
    fontSize: "32px",
    textAlign: "center",
    fontFamiliy: "Roboto sans-serif",
  }
  return (
    <div className="App">
      <h1 style={h1style}>Azizbek  </h1>
      <p style={Doctor}>He is a Doctor</p>
    </div>

  );

}

export default App;

