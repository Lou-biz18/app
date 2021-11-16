import Container from './components/Container';/*chemin relatif*/

const ListofUsers =[//tableau d'objets
  {name : "Lou", familyname: "bizet", date:"18/03/00"},
  {name : "Eliott", familyname: "bibi", date:"15/10/00"},
  {name : "laurene", familyname: "baba", date:"18/10/00"},
]

function App() {
  return (
    <div className="App" style={{padding:0,margin:0}}>
      <Container users={ListofUsers}/> 
    </div>
    /*users = machin car c'est ce qu'on veut utiliser
    l
    l
    l
    l
    l 
    */
  );
}

export default App;
/* const App = () => {} équivalent à function App()*/