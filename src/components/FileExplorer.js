//------------------------------------------------------------------------------
// Imports

import FileEntry from './FileEntry';

import '../css/FileExplorer.css';

//------------------------------------------------------------------------------
// Component

const FileExplorer = ({ trees, toggleExpand }) => {
  const files = trees[0];

  return (
    <section className="file-explorer">
      {files.map((fileData) => (
        <FileEntry
          {...fileData}
          key={fileData.index}
          toggleExpand={toggleExpand}
        />
      ))}
    </section>
  );
};

export default FileExplorer;
