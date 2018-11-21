import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NumericInput from 'react-numeric-input';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class BetDialog extends React.Component {
  constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
        this.state = {
            open: true,
            selectedValue: "infavor"
        }
  }

  handleClose() {
      this.setState({ open: false });
      this.props.handleClose();
  }

  handleFinish() {
      console.log(this.state.selectedValue);
      console.log(this.state.betVal);
      this.setState({ open: false });
      this.props.handleClose();
  }

  handleChange(value) {
      this.setState({selectedValue: value});
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Fill the empty info to make a bet"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bet value
            </DialogContentText>

            <NumericInput className="form-control" min={1} val={1} precision={2}/>

            <RadioGroup name="pickfavor" selectedValue={this.state.selectedValue} onChange={this.handleChange} horizontal>
                <RadioButton value="infavor"> In favor </RadioButton>
                <RadioButton value="against"> Against </RadioButton>
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleFinish} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BetDialog;