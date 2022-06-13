import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  DialogContent,
  Grid,
  Paper,
  Slide,
  makeStyles,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import { forwardRef, useState } from 'react';
import { THEME_DARK } from 'renderer/Theme';
import { LoadingCutom } from '../Utils/LoadingCutom';
import { Charts } from './Charts';

type Props = {
  analizeResult: any;
  open: boolean;
  setOpen: any;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalResult = (props: Props) => {
  const { analizeResult, open, setOpen } = props;
  //   const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      className={classes.root}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resultados {analizeResult.id}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent style={{ background: THEME_DARK }}>
        {Object.keys(analizeResult).length ? (
          <Grid container spacing={3} style={{ marginTop: '15px' }}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">
                  Preço atual
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  R$ {analizeResult.price}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">
                  Preço teto
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  R$ {analizeResult.roof}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">
                  Retorno médio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  R$ {analizeResult.mediaPrice}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">
                  Retorno histórico
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {analizeResult.return}%
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Charts data={analizeResult} />
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <LoadingCutom />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalResult;
