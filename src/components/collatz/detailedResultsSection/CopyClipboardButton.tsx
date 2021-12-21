import { Theme } from "@mui/material/styles";

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

interface ICopyClipboardButtonProps {
  textFieldRef: React.RefObject<JSX.Element>;
}

function CopyClipboardButton(props: ICopyClipboardButtonProps) {
  const { textFieldRef } = props;
  const classes = useStyles();

  const copyToClipboard = (e: React.SyntheticEvent) => {
    if (textFieldRef) {
      const textFieldNode = textFieldRef.current as any;
      if (textFieldNode) {
        textFieldNode.select();
        document.execCommand("copy");
        const copyTriggerNode = e.target as any;
        copyTriggerNode.focus();
      }
    }
  };

  return (
    <>
      <Divider />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FileCopyIcon />}
        onTouchStart={copyToClipboard}
        onClick={copyToClipboard}
      >
        Copy
      </Button>
    </>
  );
}

export default CopyClipboardButton;
