import React from 'react';
import  MenuItem  from '../menu-item/Menu-item.component';
import './directory.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../redux/selectors/directory.selector';


const Directory = ({sections}) => ( 
  <div className="directory-menu">
      {sections.map(section => 
        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
      )}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
 
export default connect(mapStateToProps)(Directory);