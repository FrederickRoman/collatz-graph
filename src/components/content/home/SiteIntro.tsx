import Image from "next/image";
import { Box, Chip, Divider, Link } from "@mui/material";

function SiteIntro(): JSX.Element {
  return (
    <Box component="section" mx={4} my={10} sx={{ color: "white" }}>
      <Divider>
        <Chip label="PURPOSE" sx={{ color: "primary.light" }} />
      </Divider>
      <Box component="section" my={2}>
        <p>
          This is an interactive app to visualize the rise and fall of graph of
          the
          <Link
            href="https://en.wikipedia.org/wiki/Collatz_conjecture"
            target="_blank"
            rel="noopener"
            sx={{ color: "white" }}
          >
            &nbsp;Collatz Conjecture&nbsp;
          </Link>
        </p>
        <p>
          In Brief, the collatz conjecture states that given this task you would
          always eventually stop.
        </p>
        <Box maxWidth={350}>
          <Image
            src="/img/collatz_alg.png"
            width="467"
            height="265"
            alt="collatz recursion"
          />
        </Box>
      </Box>
      <Divider>
        <Chip label="FEATURES" sx={{ color: "primary.light" }} />
      </Divider>
      <Box component="section" my={2}>
        <p>Unlike other visualizations of this conjecture, this one ...</p>
        <ul>
          <li>runs in-browser.</li>
          <li>
            works even with really big numbers (&gt; 2<sup>53</sup> - 1) without
            losing precision.
          </li>
        </ul>
        <p>
          Taking those two factors together, you can try any number you want and
          you are only limited by how long you are willing to wait, and how
          powerful is your browser.
        </p>
      </Box>
    </Box>
  );
}

export default SiteIntro;
