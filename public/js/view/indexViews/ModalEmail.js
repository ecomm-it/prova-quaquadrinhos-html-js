class ModalEmail extends View{

	constructor(element) {

		super(element);
	}

	template(model){
		
		return `
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		      <div class="modal-dialog modal-dialog-centered" role="document">
		        <div class="modal-content">
		          <div class="modal-body">
		            <h5>'${model}'</h5>
		          </div>
		          <div class="modal-footer">
		            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		          </div>
		        </div>
		      </div>
		    </div>
		`
	}
}