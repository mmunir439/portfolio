export default function PDFViewer() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        src="/resume.pdf"
        width="100%"
        height="750px"
        title="PDF Viewer"
        className="shadow-lg rounded-lg"
      />
    </div>
  );
}