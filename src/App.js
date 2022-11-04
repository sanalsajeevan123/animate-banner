import './App.css';

function App() {
  return (

    <div className="container">
      <div className='border-container'>
        <div className='text-info'>
          <div className='text-info-first'>
            <h1>Scale Up Your</h1>
            <img src="/images/laptop.png" alt="lap" height={50} width={50} />
            <svg height="300" width="200" className='lap-svg-path'>
              <circle cx="60" cy="50" r="4" stroke-width="0" fill="#000000" />
              <path stroke-dasharray="10,10" d="M60,50 Q120,140 5,170" fill='none' stroke='#000000' strokeWidth={1} />
              <circle cx="5" cy="170" r="4" stroke-width="0" fill="#000000" />
            </svg>
          </div>
          <div className='text-info-second'>
            <div className='text-info-colored'>
              <h2>Business</h2>
            </div>
            <h1>With</h1>
          </div>
          <div className='text-info-third'>
            <h1>an Outsourced</h1>
          </div>
          <div className='text-info-fourth'>
            <div className='text-info-colored'>
              <h2>IT Team</h2>
            </div>
            <button>Let's Start</button>
          </div>
        </div>
        <div className='image-container first'>
          <div className='image-container-wrapper'>
            <div className='position-marker'>
              <p>1</p>
            </div>
            <div className='image-container-description descrption-first'>
              <div className='tooltip'>
                <p></p>
                <h1>Forming Team</h1>
                <span className='tooltiptext1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</span>
              </div>
            </div>
            <svg height="300" width="1200" className='svg-path-1'>
              <circle cx="7" cy="260" r="7" stroke-width="0" fill="#707070" />
              <path stroke-dasharray="15,20" d="M5,260 Q390,10 800,220" fill='none' stroke='#707070' strokeWidth={2} />
              <path id="curve" stroke-dasharray="15,20" d="M100,270 Q390,100 700,240" fill='none' />
              <text width="800" x={120} className="curvedText">
                <textPath xlinkHref='#curve'>
                  Our Process To Ensure a Quality Delivery
                </textPath>
              </text>
              <polygon points="800,220 785,226 820,229 795,205" style={{ fill: '#707070', stroke: '#707070' }} />
            </svg>
          </div>
        </div>
        <div className='image-container second'>
          <div className='image-container-wrapper'>
            <div className='position-marker'>
              <p>2</p>
            </div>
            <div className='image-container-description descrption-second'>
              <div className='tooltip'>
                <p></p>
                <h1>Bridge Workshop</h1>
                <span className='tooltiptext2'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</span>
              </div>
            </div>
            <svg height="300" width="300" className='svg-path-2'>
              <circle cx="76" cy="50" r="7" stroke-width="0" fill="#707070" />
              <path stroke-dasharray="15,20" d="M76 50 Q85 150 40 210" fill='none' stroke='#707070' strokeWidth={2} />
              <polygon points="45,205 35,190 30,225 65,200" style={{ fill: '#707070', stroke: '#707070' }} />
            </svg>
          </div>
        </div>
        <div className='image-container third'>
          <div className='image-container-wrapper'>
            <div className='position-marker'>
              <p>3</p>
            </div>
            <div className='image-container-description descrption-third'>
              <div className='tooltip'>
                <p></p>
                <h1>Commencement of the work</h1>
                <span className='tooltiptext3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</span>
              </div>
            </div>
            <svg height="200" width="1000" className='svg-path-3'>
              <circle cx="980" cy="40" r="7" stroke-width="0" fill="#707070" />
              <path stroke-dasharray="15,20" d="M980 40 Q650 130 410 47" fill='none' stroke='#707070' strokeWidth={2} />
              <polygon points="410,47 430,38 380,35 420,66" style={{ fill: '#707070', stroke: '#707070' }} />
            </svg>
          </div>
        </div>
        <div className='image-container fourth'>
          <div className='image-container-wrapper'>
            <div className='position-marker'>
              <p>4</p>
            </div>
            <div className='image-container-description descrption-fourth'>
              <div className='tooltip'>
                <p></p>
                <h1>Meeting & Evaluation</h1>
                <span className='tooltiptext3'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</span>
              </div>
            </div>
            <svg height="300" width="300" className='svg-path-4'>
              <circle cx="8" cy="40" r="7" stroke-width="0" fill="#707070" />
              <path stroke-dasharray="15,20" d="M5 40 Q0 120 40 180" fill='none' stroke='#707070' strokeWidth={2} />
              <circle cx="46" cy="190" r="7" stroke-width="0" fill="#707070" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
