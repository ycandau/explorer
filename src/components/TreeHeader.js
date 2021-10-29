//------------------------------------------------------------------------------
// Imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faCaretDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import '../css/TreeHeader.css';

//------------------------------------------------------------------------------
// Component

const TreeHeader = ({ name, isExpanded, toggleExpansion, closeTree }) => {
  const indent = 1.5;

  const expandToggle = (
    <div
      className="expand-toggle"
      style={{ width: `${indent}em` }}
      onClick={toggleExpansion}
    >
      <FontAwesomeIcon
        icon={isExpanded ? faCaretDown : faCaretRight}
        className="icon"
      />
    </div>
  );

  const fileName = (
    <div className="file-name" onClick={toggleExpansion}>
      {name}
    </div>
  );

  const closeButton = (
    <div
      className="close-button"
      style={{ width: `${indent}em` }}
      onClick={closeTree}
    >
      <FontAwesomeIcon icon={faTimes} className="icon" />
    </div>
  );

  return (
    <div className="tree-header">
      {expandToggle}
      {fileName}
      {closeButton}
    </div>
  );
};

//------------------------------------------------------------------------------

export default TreeHeader;
