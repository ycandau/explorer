//------------------------------------------------------------------------------
// Imports

import '../css/FileEntry.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

//------------------------------------------------------------------------------
// Component

const FileEntry = ({ name, index, depth, isDir, isExpanded, toggleExpand }) => {
  const indent = 1.5;

  const spacer = (
    <div className="spacer" style={{ width: `${depth * indent}em` }}></div>
  );

  const expandToggle = isDir && (
    <div className="expand-toggle" style={{ width: `${indent}em` }}>
      <FontAwesomeIcon
        icon={isExpanded ? faAngleDown : faAngleRight}
        className="icon"
        onClick={toggleExpand(0, index)}
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

export default FileEntry;
