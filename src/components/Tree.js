//------------------------------------------------------------------------------
// Imports

import FileEntry from './FileEntry';

import '../css/Tree.css';
import TreeHeader from './TreeHeader';

//------------------------------------------------------------------------------
// Component

const Tree = ({ tree, toggleExpand }) => {
  // Filter to the visible files
  const visibleFiles = [];
  for (let i = 0; i < tree.length; ) {
    const file = tree[i];
    visibleFiles.push(file);
    i = !file.isDir || file.isExpanded ? i + 1 : file.nextNonChild;
  }

  return (
    <div className="tree">
      <TreeHeader {...tree[0]} toggleExpand={toggleExpand} />
      {visibleFiles.map((fileData) => (
        <FileEntry
          {...fileData}
          key={fileData.index}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Tree;
