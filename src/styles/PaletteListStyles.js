import sizes from "./sizes";
import bg from './bg.svg';
import ConfettiDoodles from './Confetti-Doodles.svg';



export default {
    "@global": {
        ".fade-exit": {
            opacity: "1"
        },
        ".fade-exit-active": {
            opacity: "0",
            transition: "opacity 0.5s ease-in"
        },
    },
    root: {
        backgroundColor: "#4d2eaa",
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        backgroundImage: `url(${ConfettiDoodles})`,
        // backgroundSize:"cover"
        overflow: "scroll",
        padding: "2rem",
        "& h1": {
            fontSize: "2rem",
            color: "#fff"
        }
    },
    container: {
        height: "auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"


    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: 'grid',
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 40%)",
        },
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(1, 80%)",
            gridGap: "1rem",
        }


    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",

        // flexDirection:"column"



    },
    CreateLink: {
        color: "white",
        backgroundColor: "#e55038",
        height: "40px",
        display: "flex",
        alignItems: "center",
        padding: "0px 6px",
        borderRadius: "5px",
        textDecoration: "none"
    }
}
