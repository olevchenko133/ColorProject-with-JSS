import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';
import seedColors from './seedColors';




class NewPaletteForm extends Component {

    static defaultProps = {
        maxColors: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newColorName: "",
            // colors: this.props.palettes[0].colors,
            colors: seedColors[0].colors,

            newPaletteName: ""
        };
        // this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    }


    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    addNewColor(newColor) {

        this.setState({
            colors: [...this.state.colors, newColor],
            newColorName: ""
        });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(newPalette) {
        // const newPalette = {
        //   paletteName: newPaletteName,
        //   id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        //   colors: this.state.colors
        // };

        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
        newPalette.colors = this.state.colors;
        this.props.savePalette(newPalette);
        this.props.history.push("/");
    }
    removeColor(colorName) {
        this.setState({
            colors: this.state.colors.filter(color => color.name !== colorName)
        });
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    }

    clearColors() {
        this.setState({
            colors: []
        })
    }
    addRandomColor() {
        const allColors = this.props.palettes.map(p => p.colors).flat();
        let rand ;
        let randomColor;
        let isDuplicateColor = true;
        while (isDuplicateColor) {
            rand = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[rand];
            isDuplicateColor =  this.state.colors.some(color => color.name === randomColor.name);
        }
        this.setState({
            colors: [...this.state.colors, randomColor]
        })
    }
    //-------------------------------------------- RENDER -----------------
    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColors;
        return (
            <div className={classes.root}>
                <PaletteFormNav open={open} classes={classes} palettes={palettes} handleDrawerOpen={this.handleDrawerOpen} handleSubmit={this.handleSubmit} />
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='left'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.container}>
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>

                        <Divider />

                        <Typography variant="h4" className={classes.headerTitle}>Design Your Palette</Typography>
                        <div className={classes.Btns}>
                            <Button variant="contained" className={classes.button} color="secondary" onClick={this.clearColors}>
                                Clear Palette
</Button>
                            <Button variant="contained" className={classes.button} color="primary" onClick={this.addRandomColor}
                                disabled={paletteIsFull}
                            >
                                Random Color
</Button>
                        </div>

                        <ColorPickerForm paletteIsFull={paletteIsFull}
                            colors={colors}
                            addNewColor={this.addNewColor} />
                    </div>
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList colors={this.state.colors} removeColor={this.removeColor}
                        axis='xy' onSortEnd={this.onSortEnd}
                        distance={20}

                    />
                </main>
            </div>
        );
    }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);


