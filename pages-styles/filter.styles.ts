import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
    root: {
        paddingBottom: 48
    },
    header: {
        textTransform: "uppercase",
    },
    image: {
        aspectRatio: "auto 400/522",
        transition: "all 0.3s ease-in-out",
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        "&:hover": {
            backgroundSize: "120%",
            cursor: "pointer"
        }
    },
    name: {
        textTransform: "uppercase",
        marginTop: 8
    },
    price: {
        fontWeight: 700
    }
}))

export default useStyles

