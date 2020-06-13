import React, { Component } from 'react'
import classNames from "classnames";
import { withStyles, formatMs } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from './PaletteMetaForm';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import styles from './styles/PaletteFormNavStyles';
import { Link } from "react-router-dom";


//  class PaletteFormNav extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             newPaletteName :"",
//             formShowing: false
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.showForm = this.showForm.bind(this);
//         this.hideForm = this.hideForm.bind(this);

    
//     }
//     handleChange(evt) {
//         this.setState({
//           [evt.target.name]: evt.target.value
//         });
//       }
// showForm(){
// this.setState({
//     formShowing: true
// })
// }

// hideForm(){
//     this.setState({
//         formShowing: false
//     })
//     }
 
//     render() {
//     const {classes, open, palettes, handleSubmit}= this.props;
//     const { newPaletteName } = this.state;
//         return (
//             <div>
//                 <CssBaseline />
//                 <AppBar
//                     color='default'
//                     position='fixed'
//                     className={classNames(classes.appBar, {
//                         [classes.appBarShift]: open
//                     })}
//                 >
//                     <Toolbar disableGutters={!open}>
//                         <IconButton
//                             color='inherit'
//                             aria-label='Open drawer'
//                             onClick={this.handleDrawerOpen}
//                             className={classNames(classes.menuButton, open && classes.hide)}
//                         >
//                             {/* <MenuIcon /> */}
//                         </IconButton>
//                         <Typography variant='h6' color='inherit' noWrap>
//                             Create New Palette
//             </Typography>
            
//                     </Toolbar>
//                     <div className={classes.navBtns}> 
                  
// <Link className={classes.link} to="/"> 
//                         <Button className={classes.button} variant="contained" color="secondary">
//                        Back
                            
// </Button>
// </Link>
// <Button variant="contained" className={classes.button} color="primary" onClick={this.showForm}>
//           Save
//         </Button>
// </div>
//                 </AppBar>

//                 {this.state.formShowing &&(
// <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/>)
//                 }
//             </div>
//         )
//     }
// }

// export default withStyles(styles, { withTheme: true })(PaletteFormNav);

class PaletteFormNav extends Component {
    constructor(props) {
      super(props);
      this.state = { newPaletteName: "", formShowing: false };
      this.handleChange = this.handleChange.bind(this);
      this.showForm = this.showForm.bind(this);
      this.hideForm = this.hideForm.bind(this);
    }
  
    handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }
    showForm() {
      this.setState({ formShowing: true });
    }
    hideForm() {
      this.setState({ formShowing: false });
    }
    render() {
      const { classes, open, palettes, handleSubmit } = this.props;
      const { newPaletteName } = this.state;
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            color='default'
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={this.props.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: open
                })}
              >
                <AddToPhotosIcon />
              </IconButton>
              <Typography variant='h6' color='inherit' noWrap>
                Create A Palette
              </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
            <Link className={classes.link} to="/"> 
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.button}
                >
                  Go Back
                </Button>
              </Link>
              <Button
                variant='contained'
                color='primary'
                onClick={this.showForm}
                className={classes.button}
              >
                Save
              </Button>
            </div>
          </AppBar>
          {this.state.formShowing && (
            <PaletteMetaForm
              palettes={palettes}
              handleSubmit={handleSubmit}
              hideForm={this.hideForm}
            />
          )}
        </div>
      );
    }
  }
  export default withStyles(styles, { withTheme: true })(PaletteFormNav);
