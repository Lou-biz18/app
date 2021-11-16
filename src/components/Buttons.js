import React from "react";

const styles = {
    button :{
        height:"50px",
        width:"120",
        cursor:"pointer",
        margin:"20px",
        borderRadius:"50px",
        padding:"10px",
        backgroundColor:"red",
        borderColor:"black"
    },
    buttonContainer:{
        paddingRight: "200px",
        backgroundColor:"beige",
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"center"
    }
};

const Buttons = ({users}) =>{
    return(
        <div style={styles.buttonContainer}>
            {
                users.map((user)=>(
                    <button style ={styles.button}>{user.name}</button>
                )

                )//parcourir users elle appelle une fct qui utilise chaque users qu'elle créer
            }
        </div>
    );
}
export default Buttons;