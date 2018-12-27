const userReducer = (state={
    name:"NAME",
    validThru:"12/1•",
    code:"1351 8••• •••• ••••"
  },action)=>
  {
    switch(action.type){
      case "setName":
      state={
        ...state,
        name:action.payload
      };
      break;
      case "setValidThru":
      state={
        ...state,
        validThru:action.payload
      };
      break;
      case "setCode":
      state={
        ...state,
        code:action.payload
      }
    }
    return state;
  }
  export default userReducer