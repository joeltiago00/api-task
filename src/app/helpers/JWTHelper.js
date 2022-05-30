import crypto from "crypto";

class JWTHelper {
    header = {
        alg: 'HS256',
        typ: 'JWT'
    }
    
    async parse (payload, key) {
        let header = new Buffer(this.header.toString());
        header = header.toString('base64');
    
        payload = new Buffer(payload.toString());
        payload = payload.toString('base64');


        const secret = 'morango';
        const hasher = crypto.createHmac("sha256", secret);
        let hash = hasher.update(key).digest('hex');
        
        return `${header}.${payload}.${hash}`;
    } 

    async isValid(jwt, key) {
        //TODO:: Implementar!
        let a = new Buffer(payload, 'base64');
        a.toString('base64')
    }

    async getPayload(jwt) {
        //todo:: Implementar!
    }
}

export default new JWTHelper();