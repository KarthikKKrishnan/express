export function setData(req, res){
    try{
        console.log(req.query);
        res.json("GET API");
    } catch (error) {
        console.log(error);
        res.json("error")
    }
}