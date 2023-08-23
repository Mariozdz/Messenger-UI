import { AES, enc, mode, pad } from "crypto-js";

const BASE64_IV = "fb4c5e213749eddadf1e22d723eaf207";
const IV = enc.Hex.parse(BASE64_IV);

export abstract class CryptoUtils {
  static parseKey(key: string): CryptoJS.lib.WordArray {
    return enc.Hex.parse(key);
  }

  static decryptText<T>(
    encryptedText: string,
    key?: CryptoJS.lib.WordArray
  ): T | undefined {
    if (!key) {
      return;
    }

    const plain = AES.decrypt(encryptedText, key, {
      iv: IV,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    });

    const decryptText = plain.toString(enc.Utf8);

    const result: T = JSON.parse(decryptText);

    return result;
  }

  static encryptObject(object: any, key: CryptoJS.lib.WordArray): string {
    if (typeof object != "string") {
      object = JSON.stringify(object);
    } else {
      object = object;
    }

    const encryptedObject = AES.encrypt(object, key, {
      iv: IV,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    });
    return encryptedObject.toString();
  }
}
