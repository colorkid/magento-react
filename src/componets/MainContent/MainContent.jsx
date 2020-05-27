import React from 'react';
import PropTypes from 'prop-types';
import TopSection from "../TopSection/TopSection";
import ContentSection from "../ContentSection/ContentSection";
import Nav from "../Nav/Nav";

const MainContent = ({links, contentSection, topSection}) => {
  return <>
    <TopSection content={topSection}/>
    <Nav links={links}/>
    <ContentSection content={contentSection}/>
  </>
};

MainContent.propTypes = {
  links: PropTypes.array,
  contentSection: PropTypes.object,
  topSection: PropTypes.object
};

export default MainContent;
