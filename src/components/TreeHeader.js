//------------------------------------------------------------------------------
// Imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import '../css/TreeHeader.css';

//------------------------------------------------------------------------------
// Component

const TreeHeader = ({ name, isExpanded, toggleExpansion }) => {
  const indent = 1.5;

  const expandToggle = (
    <div className="expand-toggle" style={{ width: `${indent}em` }}>
      <FontAwesomeIcon
        icon={isExpanded ? faCaretDown : faCaretRight}
        className="icon"
      />
    </div>
  );

  const fileName = <div className="file-name">{name}</div>;

  return (
    <div className="tree-header" onClick={toggleExpansion}>
      {expandToggle}
      {fileName}
    </div>
  );
};

//------------------------------------------------------------------------------

export default TreeHeader;
