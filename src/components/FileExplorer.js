//------------------------------------------------------------------------------
// Imports

import Tree from './Tree';

import '../css/FileExplorer.css';

//------------------------------------------------------------------------------
// Component

const FileExplorer = ({ trees, dispatch }) => {
  return (
    <section className="file-explorer">
      {trees.map((tree, index) => (
        <Tree key={index} tree={tree} treeInd={index} dispatch={dispatch} />
      ))}
    </section>
  );
};

export default FileExplorer;
