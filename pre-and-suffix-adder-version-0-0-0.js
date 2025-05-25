function generateBigSuffixes() {
  const units = ["", "Un", "Du", "Tr", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
  const tens = ["", "De", "Vg", "Tg", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD"];
  const hundreds = ["", "Ce", "DuCe", "TrCe", "QaCe", "QiCe", "SxCe", "SpCe", "OcCe", "NoCe"];
  const suffixes = [];
  let k = 3;
  for (let h = 0; h < hundreds.length; h++) {
      k = 3;
    k += 300 * h;
       let uva = k;
    for (let t = 0; t < tens.length; t++) {
        k = uva;
        k += 30 * t;
        let uvb = k;
      for (let u = 0; u < units.length; u++) {
          k = uvb;
          k += 3 * u;
        let name;
        if (t === 0 && h === 0) {
          if (u === 0) {
            name = "K";
          } else if (u === 1) {
            name = "M";
          } else if (u === 2) {
            name = "B";
          } else if (u === 3) {
            name = "T";
          } else {
            name = units[u] + tens[t] + hundreds[h];
          }
        } else {
          name = units[u] + tens[t] + hundreds[h];
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
  return suffixes;
}
