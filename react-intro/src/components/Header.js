export function HeaderComponent(props){
  console.log("I'm the header!")
  const x = 3 + 40;

  const isRainy = true;

  let whichClass = "";
  if(isRainy) {
    whichClass = "rainy"
  }  
  
  return (
    <header className={whichClass}>
      <h1>Hello <em>React</em></h1>
    </header>
  );
}
