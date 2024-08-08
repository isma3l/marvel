import md5 from "md5";

export const buildEnpoint = (baseUrl: string) => {
    const timestamp = Date.now();
    const privateKey = process.env['PRIVATE_KEY'];
    const publicKey = process.env['PUBLIC_KEY'];
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);
    const queryString = `&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    return `${baseUrl}${queryString}`;
}