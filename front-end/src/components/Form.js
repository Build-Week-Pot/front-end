import './_form.css';

export default function Form() {

    return(
<form class="form">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPassword4">Name of Potluck</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Name of Potluck"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputDate">Time</label>
    <input type="text" class="form-control" id="inputDate" placeholder="ex. 02:30pm"/>
  </div>
  <div class="form-group">
    <label for="special_instructions">Special Instructions for Guests</label>
    <textarea class="form-control" id="special_instructions" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    )
}