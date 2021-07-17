import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

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
