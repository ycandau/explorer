//------------------------------------------------------------------------------
// Imports

import Tree from './Tree';

import '../css/FileExplorer.css';

//------------------------------------------------------------------------------
// Component

const FileExplorer = ({ trees, toggleExpand }) => {
  return (
    <section className="file-explorer">
      {trees.map((tree, index) => (
        <Tree tree={tree} toggleExpand={toggleExpand(index)} key={index} />
      ))}
    </section>
  );
};

export default FileExplorer;
