const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

type Payload = {
  fullName?: string;
  nationalID?: string;
  createdAt?: string;
};

type Action = {
  type: string;
  payload: Payload;
};

export const CustomerReducer = (
  state = initialStateCustomer,
  action: Action
) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

export const createCustomer = (fullName: string, nationalID: string) => {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, cretedAt: new Date().toISOString() },
  };
};

export const updateName = (fullName: string) => {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
};
