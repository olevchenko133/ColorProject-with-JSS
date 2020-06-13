import chroma from 'chroma-js';
import sizes from "./sizes";

export default{
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%":"50%",
        margin: "0 auto -3.5px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: "1"
        },
  
        [sizes.down("lg")]:{
            width: "25%" ,
            height: props => (props.showingFullPalette ? "20%" : "33.3333%")

        },
        [sizes.down("md")]:{
            width: "33.3333%",
            height: props => (props.showingFullPalette ? "40%" : "50%")
        },
        [sizes.down("sm")]:{
            width: "50%" ,
            height: props => (props.showingFullPalette ? "30%":"50%"),
        },
        [sizes.down("xs")]:{
            width: "100%" ,
            height: props => (props.showingFullPalette ? "30%":"50%"),
        },
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.1 ? "black" : "white"
    },
    seeMore: {
        position: "absolute",
        bottom: "6px",
        right: "10px",
        fontSize: "0.8em",
        background: props => chroma(props.background).luminance() >= 0.1 ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
        textTransform: "uppercase",
        letterSpacing: "0.8px",
        width: "60px",
        height: "30px",
        color: "#fff",
        textAlign: "center",
        lineHeight: "30px"
    },
    copyBtn: {
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
        background: props => chroma(props.background).luminance() >= 0.1 ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        border: "none",
        lineHeight: "30px",
        color: "#fff",
        textTransform: "uppercase",
        textAlign: "center",
        opacity: "0",
        transition: " 0.4s ease",
        cursor: "pointer"

    },
    boxContent:{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        fontSize:" 0.8em",
        textTransform:" uppercase",
        letterSpacing: "1px"
    },
    copyOverlay:{
        opacity: "0",
        zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
    
    },
    showOverlay:{
        opacity:" 1",
        position:" absolute",
        zIndex:" 10",
        transform:" scale(50)"
    },
    copyMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
          fontWeight: "400",
          textShadow: "1px 2px black",
          background: "rgba(255, 255, 255, 0.2)",
          width: "100%",
          textAlign: "center",
          marginBottom: "0",
          padding: "1rem",
          textTransform: "uppercase"
        },
        "& p": {
          fontSize: "2rem",
          fontWeight: "100"
        }
      },
      showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
      }


}
