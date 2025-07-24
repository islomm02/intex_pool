export const FormatterPrice = (price: number | null): string => {
  if(price){
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return "0"
};