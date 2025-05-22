const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA71Vy47iRhT9lai2oMHvB1JLMbYBAwbzagNRFoVdNsbPrioD7hFSfiDKLlIvSDaRknxCfme+oD8hMt2daWkmk44UxSu76vrec27dc+o9yPKIoCGqQPs9KHB0gBTVr7QqEGiDThkECIMm8CGFoA3MiTde2veppd8jcb0zy6SQ5Szy96tpN59ghS/n3eXR0fX+9Aacm6Aot0nkfSFhY9xfd/14uR+sue6tbizTJeN6iwRPxnmI7Uw9HB03dOfdjLkB5zojjHCUhWaxQynCMBmiyoERfhv8ymmIijvuLXm+t2pJGhyehHXubNnpSYxOzhhKo2kv7++MOHwbfBjnx4GD2bV0ajAHz1+tbW0gMGZ/rbunnnRLJvNRMJGEbDp9gk+iMEO+5aOMRrR6c9/dfmNrTwZouujzYu7S4nC4lfV1C0r8jGz8fe7eMZ4rkz3PvA34feUP8pmXso1Y7bk2FIivrAZCsCYRHWV4dXsf7MWjMhtm9mvgDn6Zlfjf9N22cl5YRZoYUlX2qs5wu5Grxr5AW7JjbzeeTEgZl2Q3To5vgx/Yh7GRTnuuywxtK7MmolwMtNYql22tWi3ieQsfZ7Ohumbjj/AhLfGXUO7tccSqg97kdOhtbY1CfurckckqZhJup5ygmN3yQs8bD1i4Kc0gNyM5nR1KeudtjlKJdMmZSs6dOe5uNkt7wsSl31K06c2VUYwqywdt9twEGIURoRjSKM+uawrTBNA/zJGHEb22F6jbwGspoRv3F5J1PJ1sexvM16u1rLKSMEg9LrjPK34Qs9zyBjRBgXMPEYL8fkRojisbEQJDRED7m+tJ1aQxSnOKBpFfp2dVReFFSRQl/mvy7riDlMCieJchCpogwHlqI9CmuERNcP2B6UiiyStKl1F0uauLPKd3VJVhWK2rq92OUFNMn4ouohQRCtMCtFlZkOsgljk3/xscKiMoXVmQJJEzzQ4nclJHZUxTM5Rut8MI/P+FQ2N1hRFUXjMNsSPyps4oXbFryBLHyapiaF/GwXHnb5sgQyf6pKd6Cni2CYIIE7rMyiLJof8itpdN6Hl5mdF5lXl6/YIwaL9aRpRGWUhqZmUGsbeLDkiveYB2ABOC/ho8hJH/wuXZTPXcr/UwElRpKA9FUGOvE33Sm7bIfdqe5BrGCarCypyo8qzICWwdWW80QQbrZODx8vDD4+Xh18fLw0+Pl4ffHi8Pl8fLw49ffbj88uG77x9//v2PumnPdOrqPqIwSghoA30yFySoGeZIoqVi9nqaGWp6qIGP9F/k/SSf0r2djVdxuqW9Mlf2YoPb7OQRczh6Gt5atkUEnJ7seDbJtJvPJAFtEGUjg5ACu7SSi8Ax9FV8NzwITkVc1diFxS5YB60RW+VzftKRVafPxKxhVuNBGRonakCq9oq4UibjUb/Qg/tuwxhaVy9oAh8dIg+9LuYdkv18aU7j44nZ7l27ddBHg6VhHYbV/j4v9ycJ3o3sKjqx5ciKl5vW8LiOVVlg9bncHx1nSb9HXQuhMPTcvrc3dEmF2vHJeK7GlzxfONGzJUTXzyBCV/9+PqF/POgn4PU8MufmqxzPN8LfuGpnmyTLxa04SOUZvnOsRkDTNarUkdLXhlxl6KPJUCSLgbkojuBcC6NIIA1ynNb3a+bj/DpGOC/rAbeyIP9CMV2zrM6z5SaQUO2jaD6jQ0Z+inJwXvQh2YE2EDYzR5rXCqi0ophTSF80CLT60fMWOP8JnzOt7DYJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254743995989",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
