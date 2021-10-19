

const UserDash = ()=>{

return (
    <>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        New Orleans Potluck
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <div>
       Location: Indy, PA
       </div>
       <div>
       Date: 10-14-22
       </div>
       <div>
       Time: 6pm EST
       </div>
       <div>
       Food needed: Red Beans and Rice, Roasted Potatoes
       </div>
       <div>
        <a href="#" class="btn btn-primary">Edit</a>
       </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        FoodTruck Potluck
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div>
       Location: Los Vegas, NV
       </div>
       <div>
       Date: 08-15-22
       </div>
       <div>
       Time: 4pm EST
       </div>
       <div>
       Food needed: hot dogs, hot dog buns, onions, mustard, chili
       </div>
       <div>
        <a href="#" class="btn btn-primary">Edit</a>
       </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Thankgiving Potluck
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div>
       Location: Nashville, TN
       </div>
       <div>
       Date: 11-19-22
       </div>
       <div>
       Time: 12pm EST
       </div>
       <div>
       Food needed: turkey, dressing, mashed potatoes
       </div>
       <div>
        <a href="#" class="btn btn-primary">Edit</a>
       </div>
      </div>
    </div>
  </div>
</div>

</>

)


}





export default UserDash;
