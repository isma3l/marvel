import md5 from "md5";

export const generateAccessKey = () => {
    const timestamp = Date.now();
    const privateKey = process.env['PRIVATE_KEY'];
    const publicKey = process.env['PUBLIC_KEY'];
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);
    const accessKey = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    return accessKey;
}