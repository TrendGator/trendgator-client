import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface NavigationComponentState {
  isCollapsed: boolean;
}

/**
 * This class renders the navigation bar that is fixed to the top.
 * @author Omar Chehab
 */
export class NavigationComponent
  extends React.Component<undefined, NavigationComponentState> {

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  /**
   * When the device is mobile, Bootstrap collapses the links into a collapsable
   * panel. When the burger icon button is clicked, toggle the state.
   * @author Omar Chehab
   */
  handleCollapseEvent = event => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const isCollapsed = this.state.isCollapsed ? 'collapse' : '';
    return (
      <div className="navbar" style={{margin: '0px', border: 'none'}}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                aria-expanded="false"
                onClick={this.handleCollapseEvent}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Website Title</a>
            </div>
            <div className={`navbar-collapse ${isCollapsed}`}>
              <ul className="nav navbar-nav navbar-right">
                <li><a target="_blank" href="about.html">About</a></li>
                <li><a target="_blank" href="https://github.com/omarchehab98/htv-client">GitHub</a></li>
                <li><a target="_blank" href="privacy.html">Privacy</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
