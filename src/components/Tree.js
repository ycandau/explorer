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

const filterVisible = (files) => {
  const visibleFiles = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];
    visibleFiles.push(file);
    i = nextIndex(file, i);
  }
  return visibleFiles;
};

const Tree = ({ tree, dispatch }) => {
  const visibleFiles = filterVisible(tree.files);
  const root = tree.files[0];

  return (
    <div className="tree">
      <TreeHeader {...root} treeInd={tree.treeInd} dispatch={dispatch} />
      {visibleFiles.map((file) => (
        <FileEntry
          key={file.id}
          {...file}
          treeInd={tree.treeInd}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default Tree;
