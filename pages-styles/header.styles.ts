import { createStyles, makeStyles } from "@mui/styles";
import { commonRoot } from "../utils/ColorUtils";

const useStyles = makeStyles(() => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        ...commonRoot
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16
    },
    links: {
        width: "auto",
        justifyContent: 'space-around',
        marginLeft: 0,
        marginRight: 0,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    link: {
        margin: "0 8px"
    },
    menuContainer: {
        width: "auto",
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    menu: {
    },
    logoContainer: {
        
    },
    icons: {
        display: 'flex',
    },
    tabs: {
        justifyContent: "space-between",

    },
    tab: {

    },
    logo: {
        width: 150,
        '&:hover': {
            cursor: 'pointer'
        }
    },
}))

export default useStyles

