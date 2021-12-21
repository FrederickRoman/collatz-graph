import { useState, useEffect } from "react";

import BannerTextSection from "./BannerTextSection";
import Grid from "@material-ui/core/Grid";

import IStyles from "@/types/interfaces/IStyles";

const styles: IStyles = {
  bannerLayers_viewContainer: {
    position: "relative",
    left: 0,
    top: 0,
    height: 400,
    overflow: "hidden",
  },
  image_bottomLayer: {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  header_topLayer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(1, 1, 1, 0.3)",
    maxWidth: 500,
    padding: 5,
  },
};

function HeroBanner(): JSX.Element {
  const OFFSET_RATIO: number = -0.5;
  const INIT_OFFSET: number = 0;
  const [offset, setOffset] = useState<number>(INIT_OFFSET);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transform: string = `translateY(${offset * OFFSET_RATIO}px)`;

  return (
    <div style={styles.bannerLayers_viewContainer}>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <img
            src={"/img/hero.jpeg"}
            alt="math book with pen and graph paper"
            width="1200"
            height="800"
            style={{ ...styles.image_bottomLayer, transform }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <div style={styles.header_topLayer}>
            <BannerTextSection />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default HeroBanner;
