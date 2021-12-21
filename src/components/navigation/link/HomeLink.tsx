import Image from "next/image";
import Link from "next/link";
import IStyles from "@/types/interfaces/IStyles";
import { Box, Typography } from "@mui/material";

const styles: IStyles = {
  mainBar_header: {
    flexGrow: 1,
  },
  mainBar_text: {
    color: "white",
    textDecoration: "none",
  },
};

function HomeLink(): JSX.Element {
  return (
    <>
      <Link href="/" passHref>
        <Box component="a">
          <Image
            src="/img/collatzgraphLogo_red.svg"
            alt="Page logo: a graph that spikes twice before going down"
            width="30"
            height="30"
          />
        </Box>
      </Link>
      <Typography variant="h6" style={styles.mainBar_header}>
        Collatz Graph
      </Typography>
    </>
  );
}

export default HomeLink;
