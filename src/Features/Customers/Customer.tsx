import { useSelector } from "react-redux";

export const Customer = () => {
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
};
