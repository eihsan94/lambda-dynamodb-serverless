const res = (statusCode: number, body: Object ) => ({statusCode, body: JSON.stringify(body)})
export default res