import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center bg-gradient bg-dark text-light p-4">
      <h1 className="text-warning text-center mb-4 animate__animated animate__fadeInDown display-4 fw-bold shadow-lg">
        Health & Wellness App
      </h1>
      
      <div className="row w-75">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg border-0 animate__animated animate__fadeInLeft bg-info text-white">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🌿 Digital Diagnostics</h5>
              <p className="card-text">AI-powered health assessments based on real-time data.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row w-75">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg border-0 animate__animated animate__fadeInRight bg-success text-white">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🛍️ E-Commerce & Recommendations</h5>
              <p className="card-text">Personalized product suggestions based on your health data.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row w-75">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg border-0 animate__animated animate__fadeInLeft bg-danger text-white">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">💬 Consultation & AI Assistance</h5>
              <p className="card-text">Book consultations and get AI-powered health insights.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row w-75">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg border-0 animate__animated animate__fadeInRight bg-primary text-white">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🚀 Future-Proof Ecosystem</h5>
              <p className="card-text">A scalable and extensible health platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}

export default App;
