import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import MenuDivider from '../_UtilityMenuDivider';
import Utils from '../_Utils';
import MenuItem from './_MenuUtilityMenuItem';
import styles from './_MenuUtilityMenu.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance propogated to each child.
   */
  app: AppDelegate.propType,
  /**
   * Indicates if the height is bound to a value.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * Key of the top level menu.
   */
  initialSelectedKey: PropTypes.string.isRequired,
  /**
   * The config file containing the menu items to be rendered.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that closes the menu.
   */
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  isHeightBounded: undefined,
};

const processMenuItems = (items) => {
  const map = new Map();
  items.forEach((item) => {
    map.set(
      item.key,
      { id: item.id,
        title: item.title,
        content: item.content,
        contentLocation: item.contentLocation,
        isSelected: item.isSelected,
        isSelectable: item.isSelectable,
        childKeys: item.childKeys,
      },
    );
  });
  return map;
};

const hasChevron = (item) => {
  if (item.childKeys && item.childKeys.length > 0) {
    return true;
  }
  return false;
};

class MenuUtilityMenu extends React.Component {
  constructor(props) {
    super(props);
    this.getItem = this.getItem.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleRequestBack = this.handleRequestBack.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.toggleIsSelected = this.toggleIsSelected.bind(this);
    this.state = {
      map: processMenuItems(props.menuItems),
      currentKey: props.initialSelectedKey,
      previousKeyStack: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      map: processMenuItems(nextProps.menuItems),
    });
  }

  getItem(key) {
    return this.state.map.get(key);
  }

  buildItem(key) {
    const item = this.getItem(key);
    const chevron = hasChevron(item);
    return (
      <MenuItem
        key={key}
        itemKey={key}
        id={item.id}
        title={item.title}
        content={item.content}
        contentLocation={item.contentLocation}
        isSelected={item.isSelected}
        isSelectable={item.isSelectable}
        hasChevron={chevron}
        onChange={this.handleOnChange}
      />
    );
  }

  buildListContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return (
        <ul className={cx('body')}>
          {currentItem.childKeys.map((key) => {
            let item = null;
            if (this.getItem(key).contentLocation === Utils.LOCATIONS.BODY) {
              item = this.buildItem(key);
            }
            return item;
          })}
        </ul>
      );
    }
    return null;
  }

  buildFooterContent(currentItem) {
    if (currentItem && currentItem.childKeys && currentItem.childKeys.length) {
      return currentItem.childKeys.map((key) => {
        let item = null;
        if (this.getItem(key).contentLocation === Utils.LOCATIONS.FOOTER) {
          item = this.buildItem(key);
        }
        return item;
      });
    }
    return null;
  }

  /**
   * Function to trigger when an item is selected.
   * 1. Has children: navigate to the next page
   * 2. Toggles: trigger onChange without closing the menu.
   * 3. Endpoint: close menu and trigger onChange.
   * @param {*} event
   * @param {*} key
   */
  handleOnChange(event, key) {
    const childKeys = this.getItem(key).childKeys;
    const item = this.getItem(key);
    if (typeof childKeys !== 'undefined' && childKeys.length > 0) {
      this.toggleIsSelected(key);
      this.setState({
        previousKey: this.push(this.state.currentKey),
        currentKey: key,
      });
    } else {
      this.toggleIsSelected(key);
      if (item.isSelectable !== true) {
        this.props.onRequestClose();
      }
      this.props.onChange(event, key);
    }
  }

  handleRequestBack() {
    this.setState({ currentKey: this.pop() });
  }

  pop() {
    const newStack = this.state.previousKeyStack.slice();
    const lastKey = newStack.pop();
    this.setState({ previousKeyStack: newStack });
    return lastKey;
  }

  push(key) {
    const newStack = this.state.previousKeyStack.slice();
    newStack.push(key);
    this.setState({ previousKeyStack: newStack });
  }

  toggleIsSelected(key) {
    const item = this.getItem(key);
    item.isSelected = !item.isSelected;
    this.state.map.set(key, item);
  }

  render() {
    const {
      app,
      initialSelectedKey,
      menuItems,
      isHeightBounded,
      onChange,
      onRequestClose,
      ...customProps
    } = this.props;

    const MenuClassNames = cx(['utility-menu', customProps.classNames]);
    const headerClassNames = cx('header');
    const headerLeftContainer = cx('left-container');
    const headerRightContainer = cx('right-container');
    const headerInnerContainer = cx('inner-container');
    const closebuttonClassNames = cx('close-button');
    const backButtonClassNames = cx('back-button');
    const iconLeftClassNames = cx('icon-left');
    const iconCloseClassNames = cx('icon-close');
    const headerTextClassNames = cx('header-text');
    const footerClassNames = cx('footer');
    const footerDividerClassNames = cx('footer-divider');

    const currentKey = this.state.currentKey;
    const currentItem = this.getItem(currentKey);
    const backButton = (
      <button className={backButtonClassNames} onClick={this.handleRequestBack} aria-label={'Back Button'}>
        <IconLeft className={iconLeftClassNames} />
      </button>
    );
    const closeButton = (
      <button onClick={onRequestClose} className={closebuttonClassNames} aria-label={'Close Button'}>
        <IconClose className={iconCloseClassNames} />
      </button>
    );

    const header = (
      <div className={headerClassNames}>
        <span className={headerLeftContainer}>
          <span className={headerInnerContainer}>
            {currentKey !== Utils.KEYS.MENU && backButton}
            <span className={headerTextClassNames}>{currentItem.title}</span>
          </span>
          <span className={headerRightContainer} >
            {closeButton}
          </span>
        </span>
        <MenuDivider />
      </div>
      );

    let footer = null;
    if (currentKey === Utils.KEYS.MENU) {
      footer = (
        <div className={footerClassNames}>
          <MenuDivider className={footerDividerClassNames} />
          {this.buildFooterContent(currentItem)}
        </div>
      );
    }

    return (
      <ContentContainer
        {...customProps}
        header={header}
        footer={footer}
        fill={isHeightBounded}
        className={MenuClassNames}
        role={'navigation'}
        aria-label={'Utility menu'}
      >
        {this.buildListContent(currentItem)}
      </ContentContainer>
    );
  }
}

MenuUtilityMenu.propTypes = propTypes;
MenuUtilityMenu.defaultProps = defaultProps;

export default MenuUtilityMenu;