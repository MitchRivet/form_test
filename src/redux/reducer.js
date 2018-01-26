//constants
const UPDATE_FORM_INPUT = "UPDATE_FORM_INPUT";
const SUBMIT_FORM = "SUBMIT_FORM";
const FORM_DONE = "FORM_DONE";

//actions
export const updateFormInput = input => ({ type: UPDATE_FORM_INPUT, input });
export const submitForm = input => ({ type: SUBMIT_FORM, input });
export const formDone = done => ({ type: FORM_DONE, done });

//initial state
let initial = {
  formInput: {
    firstName: "",
    lastName: "",
    hobbies: []
  },
  valid: false,
  loading: false,
  isDone: false
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_FORM_INPUT:
      return Object.assign({}, state, { formInput: action.input });
    case SUBMIT_FORM:
      return Object.assign({}, state, { loading: true, isDone: false });
    case FORM_DONE:
      return Object.assign({}, state, { loading: false, isDone: true });
    default:
      return state;
  }
};

export default reducer;
