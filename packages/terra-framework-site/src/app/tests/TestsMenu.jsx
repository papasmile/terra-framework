import React from 'react';
import { withRouter } from 'react-router-dom';
import MenuList from '../common/menu/MenuList';
import RoutingDelegate from '../common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const TestsMenu = ({ routingManager, config }) => (
  <MenuList
    headerText="Tests"
    routingManager={routingManager}
    links={Object.keys(config).map((componentKey) => {
      const testRoot = config[componentKey].testRoot;
      if (testRoot) {
        return {
          id: testRoot,
          path: testRoot,
          text: config[componentKey].name,
        };
      }
      return undefined;
    }).filter(link => (!!link))}
  />
);

TestsMenu.propTypes = propTypes;

const injectConfig = config => (
  ComponentClass => (
      props => (
        <ComponentClass {...props} config={config} />
      )
  )
);

export default withRouter(TestsMenu);
export { injectConfig };
