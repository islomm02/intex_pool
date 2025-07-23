export function formatUzbekPhoneNumber(phone: string | undefined): string | undefined {
  if(phone){
    const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("998") && digits.length === 12) {
    const code = digits.slice(3, 5);      
    const part1 = digits.slice(5, 8);     
    const part2 = digits.slice(8, 10);    
    const part3 = digits.slice(10, 12);   

    return `(${code}) ${part1}-${part2}-${part3}`;
  }
  return phone;
  }

}
