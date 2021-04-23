const Sequelize = require('sequelize')
const sequelize = new Sequelize('TheNoteKeeper', 'postgres', '1471236987Mi', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
})

;(User = sequelize.define('user', {
    username: {
        type: Sequelize.CHAR,
    },
    email: {
        type: Sequelize.CHAR,
    },
    password: {
        type: Sequelize.CHAR,
    },
})),
    ((Note = sequelize.define('note', {
        title: {
            type: Sequelize.CHAR,
        },
        context: {
            type: Sequelize.CHAR,
        },
    })),
    Note.belongsTo(User)),
    ((Cmnt = sequelize.define('comment', {
        context: {
            type: Sequelize.CHAR,
        },
    })),
    Cmnt.belongsTo(User),
    Cmnt.belongsTo(Note))
