import sizes from "./sizes";


export default  {
    Palette:{
      height: "90vh"
  
    },
    tints:{
      [sizes.down("lg")]:{
        width: "25%" 
    },
    },
    Colors:{
      height: "100%",

      [sizes.down("md")]:{
        height: "50%",
    },
      [sizes.down("xs")]:{
        height: "20%",
    },
  },
goBack:{
    width: "20%",
    height:"50%",
    color: "#FFF",
    backgroundColor: "#000",
    margin: "0 auto -3.5px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
  opacity:"1",
  position:"relative",
  "& a":{

    background:" rgba(255,255,255,0.3)",
    width: "100px",
        height: " 30px",
        position: " absolute",
        display: "inline-block",
        top: "0",
        bottom: " 0",
        left: " 0",
        right: " 0",
        margin: "auto",
        outline: "none",
        fontSize: "1rem",
        border: "none",
        lineHeight: "30px",
        color: "#fff",
        textTransform: "uppercase",
        textAlign: "center",
        cursor: "pointer",
        textDecoration:"none",
        
  },
  [sizes.down("lg")]:{
    width: "25%",
    height: "33.3333%" 
},
[sizes.down("md")]:{
    width: "100%",
      height: "50%" 
},
[sizes.down("sm")]:{
  width: "50%" ,
  height: "50%"
},
[sizes.down("xs")]:{
    width: "100%" ,
    height:"50%",
},
  
}
}