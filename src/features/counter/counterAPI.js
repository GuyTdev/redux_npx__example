// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve, reject) => amount>0?
    setTimeout(() => resolve({ data: amount }), 500):
    reject(console.log("amount is negetive"))
  );
}
