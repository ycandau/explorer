//------------------------------------------------------------------------------
// Imports

import FileEntry from './FileEntry';

import '../css/Tree.css';
import TreeHeader from './TreeHeader';

//------------------------------------------------------------------------------
// Component

const nextIndex = (file, index) => {
  if (!file.isDir || file.isExpanded || file.nextNonChild === undefined) {
    return index + 1;
  }
  return file.nextNonChild;
};

const filterVisible = (tree) => {
  const visibleFiles = [];
  for (let i = 0; i < tree.length; ) {
    const file = tree[i];
    visibleFiles.push(file);
    i = nextIndex(file, i);
  }
  return visibleFiles;
};

const Tree = ({ tree, toggleExpand }) => {
  const visibleFiles = filterVisible(tree);

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
