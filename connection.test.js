const Connection = require("./connection.js");

describe('Connection module', () => {
    
    describe('Constructor function tests', () => {
        
        it('fail when no url provided', () => {
            expect(() => {new Connection(null, "testDB")}).toThrow("url is required");
        })

        it('fail when no dbName provided', () => {
            expect(() => {new Connection("http://localhost:3030", null);}).toThrow("dbName is required");
        })

        it('success instanciation', () => {
            const con = new Connection("http://localhost:3030", "testDB");
            expect(con).toMatchObject({url:"http://localhost:3030",dbName:"testDB"});
            expect(con.url).toBe("http://localhost:3030");
            expect(con.dbName).toBe("testDB");
        })
    })

    describe('Connect method tests', () => {
        it('success connection', () => {
            const con = new Connection("http://localhost:3030", "testDB");
            expect(con.connect()).toBe("connected to db");
        })
    })

    
})
