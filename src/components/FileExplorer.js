//------------------------------------------------------------------------------
// Imports

import Tree from './Tree';

import '../css/FileExplorer.css';

//------------------------------------------------------------------------------
// Component

const FileExplorer = ({ trees, dispatch }) => {
  return (
    <section className="file-explorer">
      {trees.map((tree) => (
        <Tree key={tree.treeInd} tree={tree} dispatch={dispatch} />
      ))}
    </section>
  );
};

//------------------------------------------------------------------------------

export default FileExplorer;
