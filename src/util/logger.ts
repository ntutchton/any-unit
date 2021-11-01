class Log {
  log = (message:string, level?:string):void => {
    switch(level){
      case 'INFO':
        console.log(`[INFO] ${message}`); break;
      case 'WARN':
        console.warn(`[WARN] ${message}`); break;
      case 'ERROR':
        console.error(`[ERROR] ${message}`); break;
      default:
        console.log(`${message}`); break;
    }
  }
}

export const Logger = new Log();