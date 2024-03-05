import { useSelector } from "react-redux";
import { getBalance } from "./selector";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = () => {
  const abc = useSelector(getBalance);

  return <div className="balance">{formatCurrency(abc)}</div>;
};

export default BalanceDisplay;
