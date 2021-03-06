import sizes from "./sizes";



export default{
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        [sizes.down("sm")]:{
 flexDirection:"column",
 height: "auto",
      },
      },
      logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",

        "& a": {
          textDecoration: "none",
          color: "black",
          [sizes.down("sm")]:{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "40px",
            textAlign: "center",
            margin:"auto"
                 },
        },
        [sizes.down("sm")]:{
          width: "100%",
          height: "40px",
    
               },
      },
      slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
          backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
          height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
          backgroundColor: "teal",
          outline: "none",
          border: "2px solid teal",
          boxShadow: "none",
          width: "13px",
          height: "13px",
          marginLeft: "-7px",
          marginTop: "-3px"
        },
        [sizes.down("md")]:{
   
          width: "90%",
               },
      },
      selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
      },
      SliderMob:{
        [sizes.down("md")]:{
   
          width: "33%",
               },
        [sizes.down("sm")]:{
   
          width: "100%",
               },
      }
}