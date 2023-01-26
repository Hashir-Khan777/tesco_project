
const service={
    getData:({from,to,raw})=>{
        

        return new Promise((resolve,reject)=>{
            const datas=raw&&raw?.slice(from,to)
            resolve({
                count:raw&&raw?.length,
                data:datas
            })
        })
    }
}
export default service