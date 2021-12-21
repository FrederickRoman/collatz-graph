import { useEffect, useState } from "react";

import fromExponential from "from-exponential";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import collatzCompute from "@/services/computeCollatz/collatzSafeInt";
import collatzBigInt from "@/services/computeCollatz/collatzBigInt.js";

import CollatzTable from "./collatzOutputSections/collatzResultsTableSection/CollatzTable";
import CollatzTabs from "./collatzInputSection/collatzTabsSection/CollatzTabs";

const workerURL = `/workers/collatzBigIntWorker.js`;

interface ICollatzPanelProps {
  orbit: number[] | bigint[];
  setOrbit: React.Dispatch<React.SetStateAction<number[] | bigint[]>>;
  setResults: React.Dispatch<React.SetStateAction<number[] | bigint[]>>;
}

function CollatzPanel(props: ICollatzPanelProps) {
  const { orbit, setResults, setOrbit } = props;
  const [tab, setTab] = useState("small");

  const DEFAULT_NUMBER = 5;
  const DEFAULT_STEPS = 5;
  const DEFAULT_PEAK = 16;

  const [number, setNumber] = useState(DEFAULT_NUMBER);
  const [bigNumber, setBigNumber] = useState(DEFAULT_NUMBER);
  const [steps, setSteps] = useState(DEFAULT_STEPS);
  const [peak, setPeak] = useState(DEFAULT_PEAK);

  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    if (tab === "small") {
      if (number) {
        const intNumber = parseInt(fromExponential(number), 10);
        if (intNumber) {
          const collatzIntSequence = collatzCompute(intNumber);
          setOrbit(collatzIntSequence);
        }
      }
    }
  }, [number, tab, setOrbit]);

  useEffect(() => {
    if (window.Worker) {
      const worker = new Worker(workerURL);
      setWorker(worker);
      return () => worker.terminate();
    }
  }, []);

  useEffect(() => {
    if (window.Worker) {
      const worker = new Worker(workerURL);
      setWorker(worker);
    }
  }, [bigNumber]);

  useEffect(() => {
    if (tab === "big") {
      if (worker) {
        worker.postMessage(bigNumber);
        worker.onerror = (err) => console.log(err);
        worker.addEventListener("message", ({ data }) => setOrbit(data));
      } else {
        const collatzBigIntSequence = collatzBigInt(bigNumber);
        setOrbit(collatzBigIntSequence);
      }
    }
  }, [bigNumber, tab, worker, setOrbit]);

  useEffect(() => {
    setNumber(5);
    setBigNumber(5);
    setOrbit([5, 16, 8, 4, 2, 1]);
    setSteps(5);
    setPeak(16);
  }, [tab, setOrbit]);

  useEffect(() => {
    console.log(orbit);
    const numOrbit = orbit.map((o: number | bigint) => Number(o));
    setPeak(Math.max(...numOrbit));
    setSteps(numOrbit.length - 1);
    setResults(orbit);
  }, [orbit, setResults, tab]);

  const controlProps = { number, setNumber, bigNumber, setBigNumber };
  const tableProps = { number, bigNumber, steps, peak, tab };
  const tabsProps = { controlProps, tableProps, tab, setTab };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box mt={5}>
          <Paper elevation={3} style={{ width: 310 }}>
            <CollatzTabs {...tabsProps} />
          </Paper>
        </Box>
        <Box mt={5}>
          <Paper elevation={3} style={{ width: 310 }}>
            <CollatzTable {...tableProps} />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CollatzPanel;
