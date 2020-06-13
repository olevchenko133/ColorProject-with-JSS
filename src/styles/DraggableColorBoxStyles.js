import sizes from "./sizes";
import chroma from 'chroma-js';

const styles = {
    root: {
        height: "25%",
        width: "20%",
        margin: "0 auto -3.5px",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover svg":{
            color:"#fff"

        }, 
        [sizes.down("lg")]: {
          width: "25%",
          height: "20%"
        },
        [sizes.down("md")]: {
          width: "100%",
          height: "10%"
        }
        
        
    },
    boxContent:{
        color: props =>
        chroma(props.color).luminance() <= 0.08
          ? "rgba(255,255,255,0.8)"
          : "rgba(0,0,0,0.6)",
        position: "absolute",
        bottom: "10px",
        left: "10px",
        fontSize:" 0.8em",
        textTransform:" uppercase",
        letterSpacing: "1px",
        display:"flex",
        alignItems:"center",
        width:"90%",
        justifyContent:"space-between"
    },
    deleteIcon:{
        color:" rgba(255,255,255,0.8)",
transition: "0.4s ease",
"&:hover":{
    transform:"scale(1.5)"
}
    }
}

export default styles;