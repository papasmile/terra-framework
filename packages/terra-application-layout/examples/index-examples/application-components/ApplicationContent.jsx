import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import { Route } from 'react-router-dom';
import Button from 'terra-button';
import DisclosureComponent from 'terra-disclosure-manager/examples/index-examples/DisclosureComponent';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-clinical-action-header';

const ApplicationContent = ({ layoutConfig, app, contentName, includeRouting }) => (
  <ContentContainer
    fill
  >
    <div style={{ padding: '1.5rem' }}>
      <h1>{contentName}</h1>
      <h2>Progressive Disclosure</h2>
      <hr />
      <p>The ApplicationLayout ensures all content and menu components receive an AppDelegate prop (as <b>app</b>), with ModalManager support included by default. The ApplicationLayout can be wrapped in additional DisclosureManagers to provide additional disclosure capabilities.</p>
      <Button
        text="Launch Modal" onClick={() => {
          app.disclose({
            preferredType: 'modal',
            size: 'medium',
            content: {
              key: 'MODAL_TEST',
              component: <DisclosureComponent />,
            },
          });
        }}
      />
      <Route
        path="/page1/items" render={() => (
          <div>
            <h2>Items</h2>
            <Route
              path="/page1/items/:item" render={({ match }) => (
                <h2>{match.params.item}</h2>
              )}
            />
          </div>
        )}
      />
      <Route
        path="/page1/other_thing" render={() => (
          <h2>Other Thing</h2>
        )}
      />
      <h2>Lorem ipsum dolor sit amet</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
      <h2>Orci varius natoque penatibus et.</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
      <h2>Pellentesque et odio nibh. Donec.</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
      <h2>Lorem ipsum dolor sit amet</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
      <h2>Orci varius natoque penatibus et.</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
      <h2>Pellentesque et odio nibh. Donec.</h2>
      <hr />
      <p>Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh.</p>
      <p>Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna.</p>
      <p>Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci.</p>
    </div>
  </ContentContainer>
);

ApplicationContent.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
  app: AppDelegate.propType,
};

export default ApplicationContent;
