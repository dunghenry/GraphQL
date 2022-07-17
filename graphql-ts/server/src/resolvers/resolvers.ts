const resolvers  = {
    Query : {
        books: () =>{
            return [{id: 1, title: "De men phieu lieu ki", genre: "Adventure"}]
        }
    }
}

export default resolvers;