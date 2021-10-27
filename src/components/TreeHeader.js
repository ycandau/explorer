//------------------------------------------------------------------------------
// Imports

import '../css/TreeHeader.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

//------------------------------------------------------------------------------
// Component

const TreeHeader = ({ name, index, isExpanded, toggleExpand }) => {
  const indent = 1.5;

  const expandToggle = (
    <div className="expand-toggle" style={{ width: `${indent}em` }}>
      <FontAwesomeIcon
        icon={isExpanded ? faAngleDown : faAngleRight}
        className="icon"
        onClick={toggleExpand(index)}
      />
    </div>
  );

  const fileName = <div className="file-name">{name}</div>;

  return (
    <div className="tree-header">
      {expandToggle}
      {fileName}
    </div>
  );
};

export default TreeHeader;
