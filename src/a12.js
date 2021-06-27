import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUsers,
} from '@fortawesome/fontawesome-free-solid';

import {
  ApplicationFrame,
  provider as DeviceDetector,
  Icon,
  SlidingMenu,
  ApplicationHeader
} from "@com.mgmtp.a12/widgets";

const styles = theme => ({

});

class A12 extends React.Component {
    state = {
      subExpanded: false,
    };


    componentDidMount() {

    }

  handleExpansionChange = () => {
    this.setState({ subExpanded: !this.state.subExpanded });
  };

  onMenuItemClick = () => {
      console.log('menu item clicked');
  }

    render() {
        const { classes, theme } = this.props;

      const submenus = [
        {
          label: "1",
          selected: true,
          icon: <Icon codePoint={0xe1b2} />
        },
        { label: "2" },
        {
          label: "3",
          disabled: true,
          icon: <FontAwesomeIcon icon={faUsers} size="lg" />
        },
        { label: "X Menu" },
        { label: "Y Menu" },
        {
          label: "Z Menu",
          onClick: () => {console.log('click...')},
          icon: <Icon codePoint={0xe1bf} />
        }
      ];

        return(
          <div>
            <ApplicationFrame
              main={
                <ApplicationHeader
                  leftSlots={[<span>Logo</span>, <span>Widgets Showcase</span>]}
                  rightSlots={[<span>Version: X.XX</span>]}
                />
              }
              sub={
                <SlidingMenu
                  items={submenus}
                  onClick={this.onMenuItemClick}
                />
              }
              content={<div>content</div>}
              onExpansionChange={() => { this.handleExpansionChange(); }}
            />
          </div>

        );
    }
}


export default withStyles(styles, { withTheme: true })(A12);
