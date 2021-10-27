//------------------------------------------------------------------------------
// Imports

import FileEntry from './FileEntry';

import '../css/FileExplorer.css';

//------------------------------------------------------------------------------
// Component

const FileExplorer = ({ trees, toggleExpand }) => {
  const files = trees[0];

  const visibleFiles = [];
  for (let i = 0; i < files.length; ) {
    const file = files[i];
    visibleFiles.push(file);
    i = !file.isDir || file.isExpanded ? i + 1 : file.nextNonChild;
  }

  return (
    <section className="file-explorer">
      {visibleFiles.map((fileData) => (
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
