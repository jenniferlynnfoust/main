'use strict';

const e = React.createElement;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

   //  return e(
   //    'button',
   //    { onClick: () => this.setState({ liked: true }) },
   //    'Like'
   //  );
     
   // return e(
   //    'button',
   //    { onClick: () => this.setState({ liked: true }) },
   //    'Like'
   // );
     
     
     // Display a "Like" <button>
return (
   // <button onClick={() => this.setState({ liked: true })}>
   //   Like
   // </button>
<div id="header">
   <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark" aria-label="Third navbar example">
   <div class="container-fluid">
     <a class="navbar-brand" href="#">JF</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

     <div class="collapse navbar-collapse" id="navbarsExample03">
       <ul class="navbar-nav me-auto mb-2 mb-sm-0">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="/main/index.html">Home</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/main/metric-imperial/index.html">Metric/Imperial</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/main/space-station/index.html">Space Station</a>
         </li>
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Some More</a>
           <ul class="dropdown-menu" aria-labelledby="dropdown03">
             <li><a class="dropdown-item" href="/main/password-generator/index.html">Password Generator</a></li>
             <li><a class="dropdown-item" href="/main/space-station/index.html">Space Station</a></li>
             <li><a class="dropdown-item" href="/main/space-station/index.html">Space Station</a></li>
           </ul>
         </li>
       </ul>
{/*        
       <form>
         <input style="font-size:80%; width: 102%;"class="form-control" type="text" placeholder="This doesn't do anything" aria-label="Search">
       </form> */}

     </div>
   </div>
      </nav>
      </div>
   

 );
     
     
//  <nav class="navbar navbar-expand-lg navbar-light bg-light">
//  <a class="navbar-brand" href="main/index.html">JF</a>
//  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//    <span class="navbar-toggler-icon"></span>
//  </button>

//  <div class="collapse navbar-collapse" id="navbarSupportedContent">
//    <ul class="navbar-nav mr-auto">
//      <li class="nav-item active">
//        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//      </li>
//      <li class="nav-item">
//        <a class="nav-link" href="../metric-imperial/index.html">Metric/Imperial</a>
//      </li>
//      <li class="nav-item">
//          <a class="nav-link" href="../space-station/index.html">Space Station</a>
//        </li>
//        <li class="nav-item dropdown">
//          <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//          <ul class="dropdown-menu" aria-labelledby="dropdown03">
//            <li><a class="dropdown-item" href="password-generator/index.html">Password Generator</a></li>
//            <li><a class="dropdown-item" href="space-station/index.html">Space Station</a></li>
//            <li><a class="dropdown-item" href="space-station/index.html">Space Station</a></li>
//          </ul>
//        </li>
//    </ul>
//  </div>
// </nav>
  }
}


const domContainer = document.querySelector('#navbar');const root = ReactDOM.createRoot(domContainer);root.render(e(Navbar));

// class Navbar extends React.Component {
//    // constructor(props) {
//    //    super(props);
//    //    this.state = {
//    //       name: '',
//    //       appVersion: ''
//    //    }
//    // }

//    render() {
//       return (
//          <>
//             <h2>Hello Friend</h2>
//             <button>Download</button>

            
//          </>
//       )
//    }

// }