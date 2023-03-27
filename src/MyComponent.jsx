//un componente react puo essere veramente semplice o diventare molto complesseo
//nella sua forma basilare sarà una funzione che ritorna dal jsx

//risulta comodo chiamare il componente con lo stesso nome del file che lo definisce
//versione abbreviata perche return è implicito
// const MyComponent()=>{
// <>
//     <h2>List Item</h2>
//     <ul>
//     <li>item 1</li>
//     <li>item 2</li>
//     <li>item 3</li>
//     <li>item 4</li>
//     <li>item 5</li>
//     </ul>
//     </>

// }
const MyComponent = () => {
  return (
    <>
      <h2>List Item</h2>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
        <li>item 5</li>
      </ul>
    </>
  );
};

export default MyComponent;
