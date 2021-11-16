import React from "react";
import Buttons from "./Buttons";

const styles = {/*objet avec attributs  
    Styles = propres à chaque fichier*/
    container: {/*objet*/
        width:"100vw",
        height:"100vh",
        backgroundColor:"pink",
        display:"grid",
        gridTemplateRows:"10% 60% 30%"
    },
};

const Container = ({users}) =>{//() =propriétés du container

    return(
        <div style={styles.container}>
           <Buttons users = {users}/>
        </div>
    );
}
export default Container;/*pour exporter dans d'autres fichier*/