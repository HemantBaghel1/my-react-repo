// // Filename - App.js
 
// import React from "react";
// import axios from "axios";
 
// class App extends React.Component {
//     state = {
//         newfiles: null,
//     };
 
//     handleFile(e) {
//         // Getting the files from the input
//         let newfiles = e.target.newfiles;
//         this.setState({ newfiles });
//     }
 
//     handleUpload(e) {
//         let newfiles = this.state.newfiles;
 
//         let formData = new FormData();
 
//         // Adding files to the formdata
//         formData.append("image", newfiles);
//         formData.append("name", "Name");
 
//         axios({
//             // Endpoint to send files
//             url: "http://localhost:8080/files",
//             method: "POST",
//             headers: {
//                 // Add any auth token here
//                 authorization: "your token comes here",
//             },
 
//             // Attaching the form data
//             data: formData,
//         })
//             // Handle the response from backend here
//             .then((res) => {})
 
//             // Catch errors if any
//             .catch((err) => {});
//     }
 
//     render() {
//         return (
//             <div>
//                 <h1>Select your files</h1>
//                 <input
//                     type="file"
//                     // To select multiple files
//                     multiple="multiple"
//                     onChange={(e) => this.handleFile(e)}
//                 />
//                 <button
//                     onClick={(e) => this.handleUpload(e)}
//                 >
//                     Send Files
//                 </button>
//             </div>
//         );
//     }
// }
 
// export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';

import ProductList from './Pages/productList';
import ProductDetail from './Pages/ProductDetail';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="product/productdetail/:id" element={<ProductDetail />} />
        <Route path="product" element={<ProductList />} />
      </Routes>
    </div>
  );
}