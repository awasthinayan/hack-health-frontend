import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
   <div class="col-auto">
        <div class="dropdown">
          <button class="btn btn-sm fw-bold px-4 py-2 rounded-pill dropdown-toggle btn-primary shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-hospital"></i> 🍃 Digital Diagnostics
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>

      <div class="col-auto">
        <div class="dropdown">
          <button class="btn btn-sm fw-bold px-4 py-2 rounded-pill dropdown-toggle btn-success shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-clipboard-heart"></i> 🛍️ E-commerce
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>

      <div class="col-auto">
        <h5 class="text-dark fw-bold animate__animated animate__pulse text-nowrap mx-4">
          <i class="bi bi-heart-pulse-fill"></i> ❤️ Health & Wellness
        </h5>
      </div>

      <div class="col-auto">
        <div class="dropdown">
          <button class="btn btn-sm fw-bold px-4 py-2 rounded-pill dropdown-toggle btn-danger shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-thermometer-half"></i> 💬 Consultation
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>

      <div class="col-auto">
        <div class="dropdown">
          <button class="btn btn-sm fw-bold px-4 py-2 rounded-pill dropdown-toggle btn-warning shadow-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-capsule"></i> 🚀 Future-Proof
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>

    </div>
</div>

  );
}

export default App;
