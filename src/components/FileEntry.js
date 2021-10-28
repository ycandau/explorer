//------------------------------------------------------------------------------
// Imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import '../css/FileEntry.css';

//------------------------------------------------------------------------------
// Component

const FileEntry = ({ name, depth, isDir, isExpanded, toggleExpansion }) => {
  const indent = 1.5;

  const spacer = (
    <div className="spacer" style={{ width: `${depth * indent}em` }}></div>
  );

  const expandToggle = isDir && (
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
    <div className="file-entry">
      {spacer}
      {expandToggle}
      {fileName}
    </div>
  );
};

//------------------------------------------------------------------------------

export default FileEntry;
