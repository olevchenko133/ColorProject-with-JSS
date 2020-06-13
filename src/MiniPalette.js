import React, { PureComponent } from 'react';


import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
    constructor(props) {
        super(props);

        this.deletePalette = this.deletePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.goToPalette(this.props.id);
    }
    deletePalette(e) {
e.stopPropagation();
this.props.openDialog(this.props.id)
    }

    render() {
        const { classes, paletteName, emoji, colors} = this.props;
        const miniColorBoxes = colors.map(color => (
            <div className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
        ))

        return (

            <div className={classes.root} onClick={this.handleClick }>
                <div className={classes.delete}>
                    <DeleteIcon
                        className={classes.deleteIcon}
                        style={{ transition: "all 0.3s ease-in-out" }}
                        onClick={this.deletePalette}
                    />
                </div>
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName} <span className={classes.emoji}> {emoji}</span></h5>


            </div>
        )
    }
}
export default withStyles(styles)(MiniPalette);