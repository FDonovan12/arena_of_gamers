const http = require('http');
const fs = require('fs');
const path = require('path');
const socketIo = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('arena_of_gamer_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define(
    'User',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        nbTournament: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cityTournament: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

const Contact = sequelize.define(
    'Contact',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

const Event = sequelize.define(
    'Event',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eventDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

sequelize.sync().then(() => {
    console.log('Base de données synchronisée');
});

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    // Message.findAll().then((messages) => {
    //     messages.forEach((message) => socket.emit('chatMessage', message));
    // });

    socket.on('newUser', (data) => {
        User.create(data);
    });

    Event.findAll().then((events) => {
        events
            .filter((event) => new Date(event.eventDate) < new Date())
            .forEach((pastEvent) => socket.emit('pastEvent', pastEvent));
    });

    Event.findAll().then((events) => {
        events
            .filter((event) => new Date(event.eventDate) >= new Date())
            .forEach((futureEvent) => socket.emit('futureEvent', futureEvent));
    });

    socket.on('newContact', (data) => {
        Contact.create(data);
    });

    socket.on('disconnect', () => {
        console.log("Un utilisateur s'est déconnecté");
    });
});

server.listen(3000, () => console.log('Serveur démarré sur le port 3000'));
