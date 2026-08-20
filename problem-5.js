function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }
    
   if (times.length === 0) {
        return "Invalid";
    }

    for (let value of times) {
        if (typeof value !== "number") {
            return "Invalid";
        }
    }

   
 let total = 0;
 let time = times.length;
    for (let i = 0; i < times.length;i++) {
        total = total + Number(times[i]);
    }
   
  return total / time;
}
 const result = averageResponseTime([100,100]);
 console.log(result);