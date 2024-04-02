const {read,remove,add,editData,list } = require("../model/artikli");

const getForm = (req,res)=>{
    res.render("form");
}

const postForm = async (req,res)=>{
    let artiklData = {
        name : req.body.name,
        manufacturer: req.body.manufacturer,
        quantity: req.body.quantity,
        dayslefttouse: req.body.dayslefttouse,
        placewhereavailable: req.body.placewhereavailable

    //     1. Name (Ime)
    //     2. Manufacturer (Proizveduvac)
    //     3. Quantity (Kolicina)
    //     4. DaysLeftToUse (Uste kolku denovi moze da se iskoristat, do koga mu e rokot na traenje)
    // 5. PlaceWhereAvalible (Mesto na koe sto moze da se kupat)
    }
    await add(artiklData);
    res.redirect("/artikli");

}

const getArtikli = async (req,res) =>{
    let data = await list();
    res.render("artikli",{ data });
}

const getDelete = async (req,res)=>{
    await remove(req.query.artiklIndex);
    res.redirect("/artikli");
}

const postEdit = async (req,res) => {
    const index = req.body.artiklIndex;
    const newData = {
        name : req.body.name,
        manufacturer: req.body.manufacturer,
        quantity: req.body.quantity,
        dayslefttouse: req.body.dayslefttouse,
        placewhereavailable: req.body.placewhereavailable
    };
    await editData(index,newData);
    res.redirect("/artikli");
}

const getEdit = async (req,res) =>{
    const index = req.query.artiklIndex;
    const artikli = await read();
    const artikl = JSON.parse(artikli)[index];
    res.render("editform", {artiklIndex:index , artikl:artikl});
}

module.exports = {
    getEdit,
    getDelete,
    getForm,
    getArtikli,
    postEdit,
    postForm
}