class Connection{
    constructor(url, dbName){
        this.checkProps(url, dbName);
        this.url = url
        this.dbName = dbName;
    }

    checkProps(url, dbName){
        if(!url) throw new Error("url is required"); 
        if(!dbName) throw new Error("dbName is required"); 
    }

    connect(){
        return "connected to db";
    }
}

module.exports = Connection;