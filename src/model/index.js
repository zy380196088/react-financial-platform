import fetch from '../utils/request.js'
class Model {
    api(options = {}){
        if(!options.method) options.method = 'get'
        return new Promise((resolve,reject) =>{
            let request
            let config = {
                method: options.method,
                url: options.url,
            }

            switch (options.method){
                case 'get':
                    request = fetch({
                        ...config,
                        params: options.params
                    })
                    break
                case 'post':
                    request = fetch({
                        ...config,
                        data: options.data
                    })
                    break
                default:
            }
            request.then(response=>{
                resolve(response)
            }).catch(error=>{
                reject(error)
            })
        })
    }
    get(options={}){
        options.method = 'get'
        return this.api(options)
    }
    post(options={}){
        options.method = 'post'
        return this.api(options)
    }
}

export default Model