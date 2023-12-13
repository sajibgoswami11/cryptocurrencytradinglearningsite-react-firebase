import * as CryptoJS from 'crypto-js';
// import * as sha256 from 'sha256';
import {Buffer} from 'buffer';

export class EncryptionDescryptionService {
  private strKey = '';
  private byteArray:any;
  private hexString:any;

  private key:any;
  private iv:any
  salt: () =>{};
  private getKey = () => {
    if (localStorage.getItem('token') == null) {
      this.strKey = 'HALTech^%$#@!Trn';
    } else {
      let temp = (localStorage.getItem('token') ?? '') + (localStorage.getItem('username') ?? '');
      this.strKey = temp.slice(-32);
    }
    this.byteArray = CryptoJS.SHA256(this.strKey).words;
    // this.byteArray = sha256.default(this.strKey, { asBytes: true });
    this.hexString = new Buffer(this.byteArray).toString('hex').slice(0, 32);
  
    this.key = CryptoJS.enc.Utf8.parse(this.hexString);
    this.iv = CryptoJS.enc.Utf8.parse(this.strKey);
  }

  public encryptData = async (data: any) => {
    try {
      this.getKey();
      const encrypted = CryptoJS.AES.encrypt(data.toString(), CryptoJS.enc.Utf8.parse(this.key), {
        keySize: 128 / 8,
          iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
    } catch (e) {
      console.log(e.message || e);
    }
  }
}