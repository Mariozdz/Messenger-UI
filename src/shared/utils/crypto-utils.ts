import { AES, enc, mode, pad } from "crypto-js";

const BASE64_IV = "fb4c5e213749eddadf1e22d723eaf207";
const IV = enc.Hex.parse(BASE64_IV);

export abstract class CryptoUtils {
  static parseKey(key: string): CryptoJS.lib.WordArray {
    return enc.Hex.parse(key);
  }

  static decryptText(
    encryptedText: string,
    key?: CryptoJS.lib.WordArray
  ): string | object {
    if (!key) {
      return {};
    }

    const plain = AES.decrypt(encryptedText, key, {
      iv: IV,
      mode: mode.CBC,
      padding: pad.Pkcs7,
    });

    const decryptText = plain.toString(enc.Utf8);

    return JSON.stringify(decryptText);
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
