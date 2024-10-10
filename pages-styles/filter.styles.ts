import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => createStyles({
    root: {
    },
    image: {
        aspectRatio: "auto 400/522",
        transition: "all 0.3s ease-in-out",
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        "&:hover": {
            backgroundSize: "120%"
        }
    }
}))

export default useStyles

