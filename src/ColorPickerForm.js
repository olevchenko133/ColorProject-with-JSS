import React, { Component } from 'react';

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from 'react-color';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "teal",
            newColorName: "",
        };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(({ color }) => color !== this.state.currentColor
            )
        );
     


    }

    updateCurrentColor(newColor) {
        this.setState({
            currentColor: newColor.hex
        });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(){
        const newColor ={
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
    }
    render() {

        const {paletteIsFull, classes} = this.props;
        return (
            <div>
                 <ChromePicker color={this.state.currentColor} onChangeComplete={
                        this.updateCurrentColor
                    } className={classes.picker} />
                    <ValidatorForm onSubmit={this.handleSubmit} ref='form' instantValidate={false}>
                        <TextValidator
                        variant="filled"
                        className={classes.colorNameInput}
                            value={this.state.newColorName}
                            name='newColorName'
                            onChange={this.handleChange}
                            validators={["required", "isColorNameUnique", "isColorUnique"]}
                            errorMessages={[
                                "Enter a color name",
                                "Color name must be unique",
                                "Color already used!"
                            ]}
                        />
                        <Button
                        className={classes.addColor}
                            variant='contained'
                            type='submit'
                            color='primary'
                            style={{ backgroundColor: 
                                paletteIsFull ? "lightgrey":
                                this.state.currentColor }}
                            disabled={paletteIsFull}
                        >
                           {paletteIsFull? "Palette is Full": "Add Color"}
            </Button>
                    </ValidatorForm>

            </div>
        )
    }
}





export default withStyles(styles, { withTheme: true })(ColorPickerForm);
