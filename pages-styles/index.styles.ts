import { createStyles, makeStyles } from "@mui/styles";
import { commonRoot } from "../utils/ColorUtils";

const useStyles = makeStyles(() => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        ...commonRoot
    },
    title: {
        textAlign: 'center',
        display: 'inline-block',
        margin: '0 auto',
        marginTop: 40
    },
    name: {
        display: 'inline-block',
        fontWeight: 400
    },
    progress: {
        alignSelf: 'center',
        top: '45%',
        position: 'absolute'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    itemWithDate: {
        display: 'flex',
        flexDirection: 'column'
    },
    chipDate: {
        margin: '8px auto',
        padding: '0 8px'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 16
    },
    iconButton: {
        marginTop: 4,
        marginLeft: 4
    },
    accordion: {
        flex: 1
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'auto'
    },
    accordionContainerCentered: {
        justifyContent: 'center'
    }, 
    accordionIcon: {
    },
    button: {
        padding: 16,
        margin: '32px 0'
    },
    user: {
        textAlign: 'left',
        paddingLeft: 16,
        paddingBottom: 4
    },
    settings: {
        position: 'absolute',
        top: 16,
        right: 16
    },
    date: {
        marginTop: 16,
        textAlign: 'center',
        display: 'inline-block',
        width: '100%'
    },
    empty: {
        display: 'flex',
        flexDirection: 'row',
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyImage: {
        width: 100,
        marginRight: 16
    },
    tabs: {
        marginTop: 24
    }
}))

export default useStyles

