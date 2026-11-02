const MODEL = {"intercept": -9.09683436826056, "log_fib4": 1.27368764195543, "curves": {"age": {"knots": [35, 50, 65, 80], "coefficients": [-0.05122228529699026, 0.05838197431925041, -0.16129439508013282]}, "bmi": {"knots": [15, 30, 40, 65], "coefficients": [0.2844731808862046, -0.18640805405024383, 0.03609690757731788]}, "hba1c": {"knots": [3.5, 6.5, 14], "coefficients": [1.25874340029409, -2.0330885558251235]}}, "method": "Exact algebraic change of spline basis; no refitting"};

const CUTOFF = 0.139;
function spline(x, spec) {
  const k=spec.knots, c=spec.coefficients, K=k.length, plus=v=>Math.max(v,0)**3;
  let y=c[0]*(x-k[0]);
  for(let j=0;j<K-2;j++) {
    const h=(plus(x-k[j])-(k[K-1]-k[j])/(k[K-1]-k[K-2])*plus(x-k[K-2])+(k[K-2]-k[j])/(k[K-1]-k[K-2])*plus(x-k[K-1]))/(k[K-1]-k[0])**2;
    y+=c[j+1]*h;
  }
  return y;
}
function classify(female, fib4, threshold, probability) {
  const byFib4=fib4>=threshold, byLens=female===1&&probability>=CUTOFF;
  return {byFib4,byLens,recommend:byFib4||byLens,added:byLens&&!byFib4,
    source:byFib4&&byLens?'Both':byFib4?'FIB-4':byLens?'LENS':'Neither'};
}
function evaluate(z) {
  for(const k of ['age','bmi','hba1c','ast','alt','platelets'])
    if(!Number.isFinite(z[k])||z[k]<=0)throw Error('Enter a positive number in every field.');
  if(z.age<35)throw Error('This study rule applies to adults aged 35 years or older.');
  if(![0,1].includes(z.female))throw Error('Select sex.');
  const fib4=z.age*z.ast/(z.platelets*Math.sqrt(z.alt)),threshold=z.age>65?2:1.3;
  let eta=MODEL.intercept+MODEL.log_fib4*Math.log(fib4);
  for(const k of ['age','bmi','hba1c'])eta+=spline(z[k],MODEL.curves[k]);
  if(!Number.isFinite(fib4)||fib4<=0||!Number.isFinite(eta))throw Error('Check the entered values and units.');
  const probability=eta>=0?1/(1+Math.exp(-eta)):Math.exp(eta)/(1+Math.exp(eta));
  return {fib4,threshold,probability,score:100*probability,...classify(z.female,fib4,threshold,probability)};
}
function boundaryFormat(value, threshold, minDigits) {
  let n=minDigits;
  while(n<14&&((Number(value.toFixed(n))>=threshold)!==(value>=threshold)))n++;
  return value.toFixed(n);
}

module.exports={evaluate,classify,boundaryFormat,CUTOFF};
