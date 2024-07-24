import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Mydocument';
import './App.css'

function App() {


  return (
    <>
   
    <PDFViewer width="400pxx" height="600px">
      
      <MyDocument />
    </PDFViewer>
    </>
  )
}

export default App
