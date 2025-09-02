export default function PDFViewer() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        src="/completeintro-to-web-v3.pdf"
        width="100%"
        height="600px"
        title="PDF Viewer"
        className="shadow-lg rounded-lg"
      />
    </div>
  );
}