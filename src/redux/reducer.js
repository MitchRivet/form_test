//constants
const UPDATE_FORM_INPUT = "UPDATE_FORM_INPUT";
const SUBMIT_FORM = "SUBMIT_FORM";

//actions
const updateFormInput = input => ({ type: UPDATE_FORM_INPUT, input });
const submitForm = input => ({ type: SUBMIT_FORM, input });

//initial state
let initial = {
  formInput: {
    firstName: "",
    lastName: "",
    hobbies: []
  },
  valid: false, 
  submitting: false 
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_FORM_INPUT:
      return Object.assign({}, state, { formInput: action.input });
    case SUBMIT_FORM:
      //todo
      return state;
    default:
      return state;
  }
};
export default reducer;
