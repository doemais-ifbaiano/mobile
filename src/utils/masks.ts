export const maskCpfCnpj = (value: string): string => {
    value = value.replace(/\D/g, "");
  
    if (value.length <= 11) {
      return value
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2");
    } else {
      return value
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }
  };
  
  export const maskDate = (value: string): string => {
    value = value.replace(/\D/g, ""); 
  
    return value
      .replace(/^(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})\d+?$/, "$1"); 
  };
  
  export const maskPhone = (value: string) => {
    value = value.replace(/\D/g, ""); 
  
    if (value.length > 11) {
      value = value.substring(0, 11); 
    }
  
    if (value.length <= 10) {
      return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").trim();
    } else {
      return value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").trim();
    }
  };

  