function generateBigSuffixes() {
  const units = ["", "Un", "Du", "Tr", "Qa", "Qi", "Sx", "Sp", "Oc", "No"];
  const tens = ["", "De", "Vg", "Tg", "QaD", "QiD", "SxD", "SpD", "OcD", "NoD"];
  const hundreds = ["", "Ce", "DuCe", "TrCe", "QaCe", "QiCe", "SxCe", "SpCe", "OcCe", "NoCe"];
  const thousandyearsofdeath = ["", "Mi", "Di", "Ti", "Qai", "Qii", "Sxi", "Spi", "Oi", "Ni"];
  const suffixes = [];
  let k = 3;
  for(let tyod = 0; tyod < thousandyearsofdeath.length; tyod++) {
k = 3;
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
          if (u === 0) {
            name = "K";
          } else if (u === 1) {
            name = "M";
          } else if (u === 2) {
            name = "B";
          } else if (u === 3) {
            name = "T";
          } else {
            name = units[u] + tens[t] + hundreds[h] + thousandyearsofdeath[tyod];
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
function s(whateveryouwanttoputbetweenthesetwobracketsiadviseyoutoputanumberandiamalwaysright) {
  const stuffineedbutidontbothertodomanuallyimsureyougetwhatimeanright = generateBigSuffixes();
  if (whateveryouwanttoputbetweenthesetwobracketsiadviseyoutoputanumberandiamalwaysright === 0) return "0";
  const tier = Math.floor(Math.log10(Math.abs(whateveryouwanttoputbetweenthesetwobracketsiadviseyoutoputanumberandiamalwaysright)) / 3);
  if (tier === 0) return whateveryouwanttoputbetweenthesetwobracketsiadviseyoutoputanumberandiamalwaysright.toString();
  const partofstuffineedbutidontbothertodomanuallyimsureyougetwhatimeanright = stuffineedbutidontbothertodomanuallyimsureyougetwhatimeanright[tier];
  const quitesmallthingthatcamefromcalculationsifimnotwrongandihopeiamnotbecauseuhidk = Math.pow(10, tier * 3);
  const endproducthopethisisgoodplsplspls = whateveryouwanttoputbetweenthesetwobracketsiadviseyoutoputanumberandiamalwaysright / quitesmallthingthatcamefromcalculationsifimnotwrongandihopeiamnotbecauseuhidk;
  return endproducthopethisisgoodplsplspls.toFixed(3).replace(/\.000$/, "") + partofstuffineedbutidontbothertodomanuallyimsureyougetwhatimeanright;
}
//plsplsplsthisbetterworkorillblowuplikeauranium-235atomicbombokgooditworksatleastfornow:)
console.log(s(55555555555555555 ** 55));
