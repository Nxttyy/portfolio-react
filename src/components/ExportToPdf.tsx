import html2pdf from "html2pdf.js";

export default function ExportToPdf() {
  const downloadPDF = () => {
    const element = document.getElementById("pdf-content");
    const { width, height } = element.getBoundingClientRect();
    const options = {
      margin: 0,
      filename: "Nathnael_Yirga.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, logging: false, useCORS: true },
      jsPDF: {
        unit: "px",
        format: [Math.ceil(width), Math.ceil(height)],
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      <button onClick={downloadPDF} className="px-4 py-0 text-sm terminal-link">
        Download as PDF
      </button>
    </div>
  );
}
