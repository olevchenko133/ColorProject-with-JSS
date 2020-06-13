import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import { Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from "./Page";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    })
  }
  deletePalette(id) {
    this.setState(st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );

  }

  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }
  render() {
    // console.log(generatePalette(seedColors[4]));
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition classNames='page' timeout='500' key={location.key}>
            <Switch location={location}>
              {/* Display all palettes */}

              <Route exact path="/palette/new" render={routeProps =>
                <Page> 
                  <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routeProps} />
                  </Page>
              } />
              <Route exact path="/" render={routeProps =>
                <Page> 
                  <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />
               </Page>
              } />
              {/* Display ONE PALETTE page */}
              <Route exact path="/palette/:id" render={routeProps =>
               <Page> 
                  <Palette
                    palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          </Page>
              } />
              {/* Display ONE COLOR page */}
              <Route path="/palette/:paletteId/:colorId" render={routeProps =>
              <Page> 
               <SingleColorPalette
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} />
                </Page>
                } />
                {/* Backup Route */}
  <Route render={routeProps =>
                <Page> 
                  <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} {...routeProps} />
               </Page>
              } />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}>

      </Route>
    );
  }
}


export default App;
