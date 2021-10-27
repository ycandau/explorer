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

const Tree = ({ tree, treeInd, dispatch }) => {
  const visibleFiles = filterVisible(tree);
  const root = tree[0];

  return (
    <div className="tree">
      <TreeHeader {...root} treeInd={treeInd} dispatch={dispatch} />
      {visibleFiles.map((file) => (
        <FileEntry
          key={file.ino}
          {...file}
          treeInd={treeInd}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Tree;
