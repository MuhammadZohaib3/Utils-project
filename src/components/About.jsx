

export default function About({mode, heading}) {
  return (
  <div className="accordion py-5" id="accordionExample"   >
     <h2 style={{color : mode ==="light"?'black':'white'}}>{heading}</h2>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button" style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }} >
        <p>Analyze Your Text helps improve writing by providing feedback on readability, grammar, and style, ensuring clear, engaging content. Ideal for writers, students, and professionals seeking polished text.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header"  >
      <button className={'accordion-button collapsed'}style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to Use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }} >
       <p>Free to Use provides a wide range of high-quality resources and tools at no cost. Perfect for students, professionals, and creatives looking to enhance their projects without spending money.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={{backgroundColor : mode ==="dark"?'black':'white', color : mode ==="light"?'black':'white' }} >
        <p>Browser Compatible ensures your website works seamlessly across all major browsers. It optimizes performance and appearance, enhancing user experience and accessibility for a wider audience. Perfect for developers and designers.</p>
      </div>
    </div>
  </div>
</div>
  )
}
