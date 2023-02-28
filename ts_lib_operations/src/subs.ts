import { logging } from 'ts_lib_logger';


logging
  .configure({
    minLevels: {
    '': 'error',
    'subs': 'info'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('subs');


export default function add(a: number, b: number){
    logger.info(`First Operand is : ${a}, Second Operand is: ${b}, Substraction Operation result is : ${a-b}`);
    return a-b;
}