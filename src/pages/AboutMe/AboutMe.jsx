import React from 'react';
import MainContent from '../../componets/MainContent/MainContent';
import {connect} from 'react-redux';

const AboutMe = ({dataApp: {contentSection,topSection}, nav: {links}}) => {
  return <>
      <MainContent
        links={links}
        contentSection={contentSection}
        topSection={topSection}
      />
  </>
};

let mapStateToProps = state => ({
  dataApp: state.aboutMePage,
  nav: state.navLinks
});

export default connect(mapStateToProps, null)(AboutMe);

