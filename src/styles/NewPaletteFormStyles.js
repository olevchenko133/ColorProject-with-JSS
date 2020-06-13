import {DRAWER_WIDTH} from '../constants';

const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
    root: {
        display: "flex"
    },

    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0

    },
    drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center",
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        width:"100%",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: "calc(100vh - 64px)",
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth,
        padding: 0
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        // padding: 0
    },
    container: {
        display: "flex",
        width: "90%",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        height: "100%"

    },
    Btns: {
        width: "320px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
    },
    headerTitle:{
        marginTop:"2.5rem"
    }
});


export default styles;