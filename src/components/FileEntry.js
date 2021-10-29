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
      />
    </div>
  );

  const onClick = isDir ? toggleExpansion : () => {};
  const cls = `file-name ${isDir ? 'is-dir' : 'is-file'}`;

  const fileName = <div className={cls}>{name}</div>;

  return (
    <div className="file-line">
      {spacer}
      <div className="file-entry" onClick={onClick}>
        {expandToggle}
        {fileName}
      </div>
    </div>
  );
};

//------------------------------------------------------------------------------

export default FileEntry;
