import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AboutPDF = () => {
  const [file, setFile] = useState(
    'http://localhost:3001/pdf/company-profile.pdf'
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const previousHandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextHandler = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="container mt-16 md:pb-16">
      <h2 className="mb-8 text-2xl font-bold">
        <span className="text-bermuda-200">Company</span> Profile
      </h2>

      <Document
        className="company-profile-doc"
        options={{
          cMapUrl: 'cmaps/',
          cMapPacked: true,
          standardFontDataUrl: 'standard_fonts/',
        }}
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          loading={
            <div className="h-[200px] md:h-[697px] flex justify-center text-white bg-black items-center">
              <span className="text-sm">Loading..</span>
            </div>
          }
          pageNumber={pageNumber}
        />
      </Document>
      <div className="flex justify-between gap-6 mt-2">
        <p className="text-base">
          Page: <span className="text-black">{pageNumber}</span> of {numPages}
        </p>

        <div className="flex gap-2">
          <span
            onClick={previousHandler}
            className="px-3 py-2 duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            <BiChevronLeft size={20} />
          </span>
          <span
            onClick={nextHandler}
            className="px-3 py-2 duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            <BiChevronRight size={20} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPDF;
