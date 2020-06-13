export default {
    root: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #333",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    } 
        
    }},
    colors: {
        backgroundColor: "#dae1e4",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "150px",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        margin: "0",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "0.5rem",
        position: "relative",

    },
    emoji: {

    },
    miniColor: {
        width: "20%",
        height: "25%",
        display: "inline-block"

    },
  
    delete: {},
    deleteIcon: {
      color: "white",
      backgroundColor: "#eb3d30",
      width: "30px",
      height: "30px",
      position: "absolute",
      right: "0px",
      top: "0px",
      padding: "10px",
      zIndex: 10,
      opacity: 0
    }


}