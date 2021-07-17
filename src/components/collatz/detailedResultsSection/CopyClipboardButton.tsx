import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";

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
