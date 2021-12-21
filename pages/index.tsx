import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import HeroBanner from "@/components/banner/HeroBanner";
import CollatzDemoSection from "@/components/calculator/CollatzDemoSection";

function Home(): JSX.Element {
  return (
    <Container disableGutters>
      <HeroBanner />
      <Box m={"1em"}>
        <CollatzDemoSection />
      </Box>
    </Container>
  );
}

export default Home;
