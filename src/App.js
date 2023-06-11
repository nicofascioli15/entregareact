import Navbar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {

    return (
    <div>
        <header>
            <Navbar />
            
        </header>

        <main>
        <ItemListContainer greeting='Bienvenidos y buenas olas!'/>
        </main>        
    </div>   
       
    )
    

}

export default App;