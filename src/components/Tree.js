//------------------------------------------------------------------------------
// Imports

import usePutRoot from '../hooks/usePutRoot';

import TreeHeader from './TreeHeader';
import FileEntry from './FileEntry';

import '../css/Tree.css';

//------------------------------------------------------------------------------
// Helpers

// To skip over non-expanded directories
const nextFileIndex = (file, isExpanded, index) => {
  if (!file.isDir || isExpanded || file.nextNonChild === undefined) {
    return index + 1;
  }
  return file.nextNonChild;
};

// Return an array of visible files
const filterVisible = (files) => {
  const visibleFiles = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];
    visibleFiles.push(file);
    i = nextFileIndex(file, file.isExpanded, i);
  }
  return visibleFiles;
};

// Return an array of expanded directories
const filterExpanded = (files, fileInd) => {
  const expandedDirs = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];

    // Toggled expansion state to be
    const isExpanded = i === fileInd ? !file.isExpanded : file.isExpanded;

    if (isExpanded) {
      expandedDirs.push([file.id, file.path]);
    }
    i = nextFileIndex(file, isExpanded, i);
  }
  return expandedDirs;
};

//------------------------------------------------------------------------------
// Component

const Tree = ({ tree, dispatch }) => {
  const put = usePutRoot(dispatch);

  const toggleExpansion = (fileInd) => () => {
    const files = tree.files;
    const { name, path, id } = files[0];
    const expandedDirs = filterExpanded(files, fileInd);
    const updatedRoot = { name, path, id, expandedDirs };
    put(updatedRoot);
  };

  const root = tree.files[0];
  const visibleFiles = filterVisible(tree.files);

  return (
    <div className="tree">
      <TreeHeader
        name={root.name}
        isExpanded={root.isExpanded}
        toggleExpansion={toggleExpansion(root.index)}
      />
      {visibleFiles.map((file) => (
        <FileEntry
          key={file.id}
          name={file.name}
          depth={file.depth}
          isDir={file.isDir}
          isExpanded={file.isExpanded}
          toggleExpansion={toggleExpansion(file.index)}
        />
      ))}
    </div>
  );
};

//------------------------------------------------------------------------------

export default Tree;
