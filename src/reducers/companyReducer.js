const companyReducer = (state={
  companyName:"YOUR COMPANY"
},action)=>
{
  switch(action.type){
    case "setCompanyName":
    state={
      ...state,
      companyName:action.payload
    };
    break;
  }
  return state;
}
export default companyReducer