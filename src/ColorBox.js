import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
// styles
import { withStyles } from '@material-ui/styles';
// import "./ColorBox.css";
import styles from './styles/ColorBoxStyles';


class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({
            copied: true
        }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        });

    }
    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props;
        const copied = this.state.copied;

        // const isDarkColor = chroma(background).luminance() <= 0.1;
        // const isLightColor = chroma(background).luminance() >= 0.1;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.ColorBox}>
                    <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }} />



                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                        <h1>copied</h1>
                        <p className={classes.copyText}>{background}</p>

                    </div>


                    <div >
                        <div className={classes.boxContent}>
                            <span className={classes.copyText}>{name} </span>


                        </div>

                        <button className={classes.copyBtn}>Copy </button>
                        {showingFullPalette &&
                            <Link
                                // to={`/palette/${paletteId}/${id}`}
                                to={moreUrl}
                                onClick={e => e.stopPropagation}>
                                <span className={classes.seeMore}>More</span>
                            </Link>
                        }
                    </div>


                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);