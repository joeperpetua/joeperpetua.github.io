const sleep = async (time, unit) => {
    //console.log(` --- Waiting for ${time} ${unit} --- `);
    switch(unit){
      case 'ms':
        return new Promise(resolve => setTimeout(resolve, time));
        break;
  
      case 's':
        return new Promise(resolve => setTimeout(resolve, time*1000));
        break;
  
      case 'm':
        return new Promise(resolve => setTimeout(resolve, time*60000));
        break;
        
      case 'h':
        return new Promise(resolve => setTimeout(resolve, time*3600000));
        break;
  
      default:
        throw new Error(`Sleep unit measure not recognized.\nSupported: ms, s, m, h.\nGiven: ${unit}`);
        break;
    }
}

export {sleep};