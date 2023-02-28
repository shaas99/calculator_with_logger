import { logging } from 'ts_lib_logger';


logging
  .configure({
    minLevels: {
    '': 'error',
    'mult': 'info'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('mult');


export default function add(a: number, b: number){
    logger.info(`First Operand is : ${a}, Second Operand is: ${b}, Multiplication Operation result is : ${a*b}`);
    return a*b;
}