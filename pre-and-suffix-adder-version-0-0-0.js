function generateBigSuffixes() {
  const units = ["", "Un", "Du", "Tr", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
  const tens = ["", "De", "Vg", "Tg", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD"];
  const hundreds = ["", "Ce", "DuCe", "TrCe", "QaCe", "QiCe", "SxCe", "SpCe", "OcCe", "NoCe"];
  const thousandyearsofdeath = ["", "Mi", "Di", "Ti", "Qai", "Qii", "Sxi", "Spi", "Oi", "Ni"];
  const suffixes = [];
  let k = 3;
  for(let tyod = 0; tyod < thousandyearsofdeath.length; tyod++) {
k = 3;
      k += tyod * 3000;
let uvz = k;
  for (let h = 0; h < hundreds.length; h++) {
      
    k += 300 * h;
       let uva = uvz;
    for (let t = 0; t < tens.length; t++) {
        k = uva;
        k += 30 * t;
        let uvb = k;
      for (let u = 0; u < units.length; u++) {
          k = uvb;
          k += 3 * u;
        let name;
        if (t === 0 && h === 0) {
          switch(u) {
            case 0:
              name = "K";
              break;
            case 1:
              name = "M";
              break;
            case 2:
              name = "B";
              break;
            case 3:
              name = "T";
              break;
            default:
              name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod];
              break;
          }
        } else {
          name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod];
        }
          name += "(e";
          name += k;
          name += ")";
        if (name !== "") suffixes.push(name); 
      }
        k = uvb;
    }
      k = uva;
  }
k = uvz;}
  return suffixes;
}
function s(num) {
  const suffixes = generateBigSuffixes();
  if (num === 0) return "0";
  const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
  const maxTier = suffixes.length - 1;

  const safeTier = Math.min(tier, maxTier);
  const scaled = num / Math.pow(10, safeTier * 3);
  const suffix = tier < suffixes.length
    ? suffixes[safeTier]
    : `(e${tier * 3})`;
  return scaled.toFixed(3).replace(/\.000$/, "") + suffix;
}
