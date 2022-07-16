import logo from './logo.svg';
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Transcript from './Transcript';
import TranscriptPDF from './TranscriptPDF.js';
import AppNavigation from './AppNavigation';
function App() {
  return (
    <div>
      <AppNavigation/>
    </div>
  );
}

export default App;
