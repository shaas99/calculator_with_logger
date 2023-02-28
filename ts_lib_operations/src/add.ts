import { logging } from 'ts_lib_logger';


logging
  .configure({
    minLevels: {
    '': 'error',
    'add': 'info'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('add');


export default function add(a: number, b: number){
    logger.info(`First Operand is : ${a}, Second Operand is: ${b}, Addition Operation result is : ${a+b}`);
    return a+b;
}