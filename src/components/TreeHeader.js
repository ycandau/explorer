//------------------------------------------------------------------------------
// Imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import '../css/TreeHeader.css';

//------------------------------------------------------------------------------
// Component

const TreeHeader = ({ name, isExpanded, toggleExpansion }) => {
  const indent = 1.5;

  const expandToggle = (
    <div className="expand-toggle" style={{ width: `${indent}em` }}>
      <FontAwesomeIcon
        icon={isExpanded ? faAngleDown : faAngleRight}
        className="icon"
        onClick={toggleExpansion}
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

//------------------------------------------------------------------------------

export default TreeHeader;
