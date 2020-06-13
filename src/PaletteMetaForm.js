import React, { Component } from 'react'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default class PaletteMetaForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            newPaletteName :"",
            // open: true
            stage: "form"
        }
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
    }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount(){
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
    this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
    )
);
}

handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
}

showEmojiPicker(){
  this.setState({ stage: "emoji" });
}
savePalette(emoji){
  const newPalette =  {
    paletteName: this.state.newPaletteName,
    emoji: emoji.native
  }
  this.props.handleSubmit(newPalette)
  this.setState({ stage: "" });

}
  render() {
    const { newPaletteName } = this.state;

    return (
      <div>
        {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button> */}
        
        <Dialog open={this.state.stage === "emoji"}   onClose={this.props.hideForm}   > 
        <DialogTitle id="form-dialog-title">Choose an Emoji</DialogTitle>

        <Picker onSelect={this.savePalette} title="Pick an Emoji" />

        </Dialog>
        <Dialog
          open={this.state.stage === "form"}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
          {/* <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}> */}
          <ValidatorForm onSubmit={this.showEmojiPicker}>
                         
          <DialogContent>
            <DialogContentText>
            Please, enter name for your palette!
            </DialogContentText>
            <TextValidator
                                value={this.state.newPaletteName}
                                label="Palette name"
                                name="newPaletteName"
                                fullWidth
                                margin="normal"
                                onChange={this.handleChange}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={[
                                    "Enter a Palette name",
                                    "Palette name must be unique"
                                ]}
                            />
   
                   
   
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
                                Save Palette
</Button>

          </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}