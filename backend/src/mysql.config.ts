import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { entities } from './typeorm';
export const basedire = __dirname;
const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  dateStrings: true,
  entities: entities,
  database: 'sen_cim',
  synchronize: true,
  //   ssl: {
  //     // Enable SSL if required
  //     ca: fs.readFileSync('path/to/ca.crt'),
  //     key: fs.readFileSync('path/to/client.key'),
  //     cert: fs.readFileSync('path/to/client.crt'),
  //   },
  // Enable encryption
  //   extra: {
  //     encrypt: true,
  //     cipherOptions: {
  //       secureProtocol: 'TLSv1_2_method',
  //       checkServerIdentity: () => undefined,
  //       // Custom SSL certificate validation
  //       rejectUnauthorized: false,
  //     },
  //     // Custom connection string encryption
  //     connectionConfig: {
  //       encrypt: true,
  //       encryptKey: crypto
  //         .publicEncrypt(
  //           fs.readFileSync('path/to/public.key'),
  //           Buffer.from(encryptionKey)
  //         )
  //         .toString('base64'),
  //     },
  //   },
};

export default config;