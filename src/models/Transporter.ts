import ShippingContainer from "./ShipppingContainer";

export default interface Transporter {
  maxWeight: number;
  addContainer: (container: ShippingContainer) => void;
  getTotalWeight: () => number;
  isOverweight: () => boolean;
}
